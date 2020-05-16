class GuaAnimation {
  constructor(game) {
    this.game = game
    this.animationName = 'idle'
    this.frames = {
      idle:  GuaAction.new(game, 'alien', 'idle'),
      run: GuaAction.new(game, 'alien', 'run'),
    }
    this.framecount = this.frames[this.animationName].framecount

    this.flipX = false
  }
  static new(game) {
    return new this(game)
  }
  update() {
    this.framecount--
    if (this.framecount == 0) {
      this.framecount = this.frames[this.animationName].framecount
      this.frames[this.animationName].resetSX()
    }else {
      this.frames[this.animationName].sx += this.frames[this.animationName].displacement
    }
  }
  draw() {
    var img = this.frames[this.animationName]
    var context = this.game.context
    if (this.flipX) {
      context.save()
      var x = img.x + img.w /2
      context.translate(x, 0)
      context.scale(-1, 1)
      context.translate(-x, 0)
      this.game.drawImage(img)
      context.restore()
    }else{
      this.game.drawImage(img)
    }
  }
  move(x, keyStatus) {
    // if (x < 0) {
    //   this.flipX = true
    // } else {
    //   this.flipX = false
    // }
    this.flipX = x < 0
    for (var v in this.frames) {
      this.frames[v].x += x
    }
    // 字典
    // 状态
    var animationNames = {
      down: 'run',
      up: 'idle',
    }
    var name = animationNames[keyStatus]
    this.changeAnimation(name)
    // if (keyStatus == 'down') {
    //   this.changeAnimation('run')
    // }else if (keyStatus == 'up') {
    //   this.changeAnimation('idle')
    // }
  }
  changeAnimation(name) {
    this.animationName = name
  }
}
