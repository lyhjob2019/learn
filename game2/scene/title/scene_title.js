class SceneTitle extends GuaScene {
  constructor(game) {
    super(game)
    var label = GuaLabel.new(game, 'hello')
    this.addElement(label)

    var ps = GuaParticleSystem.new(game)
    this.addElement(ps)
  }
  draw(){
    super.draw()
    // this.game.context.fillText('按 k 开始游戏，按 f 发射',100,200)
  }
}
