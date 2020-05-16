class GuaImage {
  constructor(game, name) {
    this.game = game
    this.texture = game.textureByName(name)
    this.x = 0
    this.y = 0
    this.sx = 0
    this.sy = 0
    this.sw = this.texture.width
    this.sh = this.texture.height
    this.w = this.texture.width
    this.h = this.texture.height
    // 硬编一个bg，没有大的素材
    if (name == 'bg') {
      this.w = 400
      this.h = 600
    }
  }
  static new (game, name){
    var i = new this(game, name)
    return i
  }
  draw() {
    this.game.drawImage(this)
  }
  update() {

  }
}
