class GuaScene {
  constructor(game){
    this.game = game
    this.debugModelEnable = false
    this.elements = []
  }
  // this归调用它的函数
  static new(game){
    var i = new this(game)
    return i
  }
  addElement(img) {
    img.scene = this
    this.elements.push(img)
  }
  draw(){
    // var i to n
    // for in
    // for of
    // forEach
    for (var e of this.elements) {
      // this.game.drawImage(e)
      // 这里让元素自己处理自己的draw，就是把它抽象了
      // 我不管它怎么draw的，它自己调用它自己的draw
      e.draw()
    }
  }
  update(){
    if (this.debugModelEnable) {
      for (var i = 0; i < this.elements.length; i++) {
        var e = this.elements[i]
        e.debug && e.debug()
      }
    }
    for (var i = 0; i < this.elements.length; i++) {
      var e = this.elements[i]
      e.update()
    }
  }
}
