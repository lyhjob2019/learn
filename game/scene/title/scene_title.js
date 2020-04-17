class SceneTitle extends GuaScene {
  constructor(game) {
    super(game)
    game.registerAction('k',function(){
      var s = Scene(game)
      game.replaceScene(s)
    })
  }

  draw(){
    this.game.context.fillText('按 k 开始游戏，按 f 发射',100,200)
  }
  update(){

  }
}
