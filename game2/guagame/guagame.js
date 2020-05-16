class GuaGame {
  constructor(fps, images, runCallback) {
    window.fps = fps
    this.images = images
    this.runCallback = runCallback
    //
    this.scene = null
    this.actions = {}
    this.keydowns = {}
    this.canvas = document.querySelector('#id-canvas')
    this.context = this.canvas.getContext('2d')
    this.init()
    var self = this
    window.addEventListener('keydown', function (event) {
      self.keydowns[event.key] = 'down'
    })
    window.addEventListener('keyup', function (event) {
      self.keydowns[event.key] = 'up'
    })
  }

  // 单例方法
  static instance(...args){
    this.i = this.i || new this(...args)
    return this.i
  }

  drawImage(img){
    this.context.drawImage(img.texture,img.sx, img.sy, img.sw, img.sh, img.x, img.y, img.w, img.h)
  }
  // 用箭头函数主要是为了用自身的this
  // 不然就要用到self = this来调用自身this
  update(){
    this.scene.update()
  }
  draw(){
    this.scene.draw()
  }
  registerAction(key,callback){
    this.actions[key] = callback
  }
  // events

  runloop() {
    var g = this
    // events
    var actions = Object.keys(g.actions)
    for (var i = 0; i < actions.length; i++) {
      var key = actions[i]
      var status = g.keydowns[key]
      if (status == 'down') {
        // 如果按键被按下，调用注册的action
        g.actions[key]('down')
      }else if (status == 'up') {
        g.actions[key]('up')
        g.keydowns[key] = null
      }
    }
    // update x and y
    g.update && g.update()
    //draw
    g.context.clearRect(0, 0, g.canvas.width, g.canvas.height);
    g.draw()
    // 递归
    setTimeout(function(){
      g.runloop()
    },1000/window.fps)
  }
  init() {
    var g = this
    // 预先载入所有图片
    var loads = []
    var names = Object.keys(g.images)
    for (var i = 0; i < names.length; i++) {
      let name = names[i]
      var path = g.images[name]
      let img = new Image()
      img.src = path
      // 这是异步
      // 怎么判断异步执行成功?
      // 加一个loads = [],计算成功的标志
      img.onload = function() {
        g.images[name] = img
        loads.push(1)
        if (loads.length == names.length) {
          g.__star()
        }
      }
    }
  }
  textureByName(name) {
    var g = this
    var img = g.images[name]
    return img
  }
  runWithScene(scene) {
    var g = this
    g.scene = scene
    // 开始运行程序
    setTimeout(function(){
      g.runloop()
    },1000/window.fps)
  }
  replaceScene(scene) {
    var g = this
      g.scene = scene
  }
  __star(scene) {
    this.runCallback(this)
  }
}
