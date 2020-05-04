// 这就是单例
// 程序不是说语法有多复杂，而是要实现功能，而且是很好地实现功能
// 如果它能实现你所有的功能并且没有任何问题
// 那它就是最好的工具
// 永远config就是一个实例
// 所谓单例就是全局变量
const config = {
    player_speed: 5,
    bullet_speed:10,
    fire_cooldown:10,
}

class Bullet extends GuaImage {
  constructor(game) {
    super(game,'bullet')
    this.setup()
  }
  setup() {
    // this.speed = 10
    this.speed = config.bullet_speed
  }
  update() {
    // this.speed = config.bullet_speed
    //
    this.y -= this.speed
  }
  // 通过这种方式可以去掉子类中的函数
  debug() {
    this.speed = config.bullet_speed
  }
}

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
    // this.speed = config.player_speed
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
      console.log(b);
      b.x = x
      b.y = y
      this.scene.addElement(b)
    }
  }
}



class Enemy extends GuaImage{
  constructor(game) {
    var type = randomBetween(0, 1)
    var name = 'enemy' + type
    super(game, name)
    this.setup()
  }
  setup() {
    this.speed = randomBetween(1, 2)
    // console.log(this.speed);
    this.x = randomBetween(0, 350)
    this.y = -randomBetween(0, 200)
  }
  update() {
    this.y += this.speed
    if (this.y > 600) {
      this.setup()
    }
  }
}

class Scene extends GuaScene {
  constructor(game) {
    super(game)
    this.setup()
    this.setupInputs()
  }
  setup() {
    var game = this.game
    this.numberOfEnemies = 10
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
