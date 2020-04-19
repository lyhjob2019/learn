class SceneWin extends GuaScene {
  constructor(game) {
    super(game)
    game.registerAction('r',function(){
      var s =  SceneTitle.new(game)
      game.replaceScene(s)
    })
  }

  draw(){
    var img = this.game.imageByName('jiangli')
    this.game.context.drawImage(img.img, 0, 0,400,300)
  }
  update(){

  }
}
