// 挡板
// 模块化
// 代码和错误放在同一个地方，要改动的时候只有这个地方受影响

var Paddle = function(game){
  var o = game.imageByName('paddle')
  o.speed = 15
  o.x = 100
  o.y = 250
  o.move = function(x) {
    if (x < 0) {
      x = 0
    }
    if (x > 400 - o.img.width) {
      x = 400 - o.img.width
    }
    o.x = x
  }
  o.moveLeft = function(){
    o.move(o.x - o.speed)
  }
  o.moveRight = function(){
    o.move(o.x + o.speed)
  }
  var aInb = function(x, x1, x2){
    return x >= x1 && x <= x2
  }
  o.collide = function(ball){
    // if (ball.y + ball.img.height > o.y) {
    //   if (ball.x > o.x && ball.x < o.x + o.img.width) {
    //     log('相撞')
    //     return true
    //   }
    // }
    // return false
    // 辅助函数是什么？
    var a = o
    var b = ball
    if (aInb(a.x, b.x, b.x + b.w) ||aInb(b.x, a.x, a.x + a.w)) {
      if (aInb(a.y, b.y, b.y + b.h) ||aInb(b.y, a.y, a.y + a.h)) {
        return true
      }
    }
    return false
  }
  return o
}
