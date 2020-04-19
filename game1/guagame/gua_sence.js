class GuaScene {
  constructor(game){
    this.game = game
  }
  // this归调用它的函数
  static new(game){
    var i = new this(game)
    return i
  }
  draw(){

  }
  update(){

  }
}
