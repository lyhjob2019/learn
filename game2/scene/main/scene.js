class Scene extends GuaScene {
  constructor(game) {
    super(game)
    this.setup()
    this.setupInputs()
  }
  setup() {
    var game = this.game
    this.numberOfEnemies = 10
    this.bullets = []
    this.bg = GuaImage.new(game, 'sky')
    this.cloud = GuaImage.new(game, 'cloud')

    // this.player = GuaImage.new(game, 'player')
    this.player = Player.new(game)
    this.player.x = 100
    this.player.y = 500

    this.addElement(this.bg)
    // this.addElement(this.cloud)
    this.addElement(this.player)
    //
    this.addEnemies()
  }
  // draw(){
  //     this.game.drawImage(this.bg)
  //    this.game.drawImage(this.player)
  // }
  update(){
    super.update()
    // this.cloud.y += 1
    // this.enemies
    for (var i = 0; i < this.enemies.length; i++) {
      var e = this.enemies[i]
      if (this.player.collide(e)) {
        // var end =  SceneEnd.new(this.game)
        // this.game.replaceScene(end)
      }
    }
  }
  addEnemies() {
    var es = []
    for (var i = 0; i < this.numberOfEnemies; i++) {
      var e = Enemy.new(this.game)
      es.push(e)
      this.addElement(e)
    }
    this.enemies = es
  }
  setupInputs() {
    var g = this.game
    var s = this
    g.registerAction('a',function(){
      s.player.moveLeft()
    })
    g.registerAction('d',function(){
      s.player.moveRight()
    })
    g.registerAction('w',function(){
      s.player.moveUp()
    })
    g.registerAction('s',function(){
      s.player.moveDown()
    })
    g.registerAction('j',function(){
      s.player.fire()
    })
  }
}
