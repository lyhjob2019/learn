class SceneEnd extends GuaScene {
  constructor(game) {
    super(game)
    this.setup()
  }
  setup() {
    var game = this.game
    var label = new GuaLabel(game, '按r重新开始')
    this.addElement(label)
    game.registerAction('r',function(){
      var s =  Scene.new(game)
      game.replaceScene(s)
    })
  }
  draw(){
    super.draw()
  }
  update(){

  }
}
