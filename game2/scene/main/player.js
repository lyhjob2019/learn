class Player extends GuaImage{
  constructor(game) {
    super(game,'player')
    this.setup()
  }
  setup() {
    this.speed = 5
    this.cooldown = 0
  }
  update() {
    this.speed = config.player_speed
    //
    if (this.cooldown > 0) {
      this.cooldown --
    }
  }
  moveLeft() {
    this.x -= this.speed
  }
  moveRight() {
    this.x += this.speed
  }
  moveUp() {
    this.y -= this.speed
  }
  moveDown() {
    this.y += this.speed
  }
  fire() {
    if (this.cooldown == 0) {
      this.cooldown = config.fire_cooldown
      var x = this.x + this.w/2
      var y = this.y
      var b = Bullet.new(this.game)
      b.x = x
      b.y = y
      this.scene.bullets.push(b)
      this.scene.addElement(b)
    }
  }
  collide(enemy) {
    var a = this
    var b = enemy
    if (aInb(a.x, b.x, b.x + b.w) ||aInb(b.x, a.x, a.x + a.w)) {
      if (aInb(a.y, b.y, b.y + b.h) ||aInb(b.y, a.y, a.y + a.h)) {
        return true
      }
    }
    return false
  }
}
