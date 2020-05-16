class SceneTitle extends GuaScene {
  constructor(game) {
    super(game)
    var bg = GuaImage.new(game, 'bg')
    var w = GuaAnimation.new(game)
    this.w = w
    w.x = 100
    w.y = 200

    this.addElement(bg)
    this.addElement(w)

    this.setupInputs()
  }
  setupInputs() {
    var self = this
    self.game.registerAction('a', function(keyStatus) {
      self.w.move(-20, keyStatus)
    })
    self.game.registerAction('d', function(keyStatus) {
      self.w.move(20, keyStatus)
    })
  }
  draw(){
    super.draw()
  }
}
