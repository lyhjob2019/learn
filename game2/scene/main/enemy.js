class Enemy extends GuaImage{
  constructor(game) {
    var type = randomBetween(0, 1)
    var name = 'enemy' + type
    super(game, name)
    this.setup()
  }
  setup() {
    this.speed = randomBetween(1, 2)
    this.x = randomBetween(0, 350)
    this.y = -randomBetween(0, 200)
  }
  update() {
    this.y += this.speed
    if (this.y > 600) {
      this.setup()
    }
  }
  collide() {
    
  }
}
