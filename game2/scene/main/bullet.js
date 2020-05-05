class Bullet extends GuaImage {
  constructor(game) {
    super(game,'bullet')
    this.setup()
  }
  setup() {
    this.speed = config.bullet_speed
  }
  update() {
    this.y -= this.speed
  }
  // 通过这种方式可以去掉子类中的函数
  debug() {
    this.speed = config.bullet_speed
  }
}
