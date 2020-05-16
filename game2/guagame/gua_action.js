class GuaAction {
  constructor(game, name, action) {
    this.game = game
    this.name = name
    this.animationName = action
    // texture预装了两个动画
    this.texture = this.game.textureByName(this.name)
    this.x = 0
    this.y = 0
    this.sx = config[this.name][this.animationName].sx
    this.sy = config[this.name][this.animationName].sy
    this.sw = config[this.name][this.animationName].sw
    this.sh = config[this.name][this.animationName].sh
    this.w = config[this.name][this.animationName].w
    this.h = config[this.name][this.animationName].h
    this.displacement = config[this.name][this.animationName].displacement
    this.framecount = config[this.name][this.animationName].framecount
  }
  static new(game, name, action) {
    return new this(game, name, action)
  }
  resetSX() {
    this.sx = config[this.name][this.animationName].sx
  }
}
