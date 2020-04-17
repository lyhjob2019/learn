var Scene = function(game) {
  var s = {
    game: game,
  }
  // 初始化
  // 载入挡板
  var paddle = Paddle(game)
  // 载入球
  var ball = Ball(game)
  // 分数
  var score = 0
  // 载入第一关
  window.blocks = loadLevel(game,1)
  // 按键注册
  game.registerAction('a',function(){
    paddle.moveLeft()
  })

  game.registerAction('d',function(){
    paddle.moveRight()
  })
  game.registerAction('f',function(){
    ball.fire()
  })

  s.draw = function() {
    // draw背景
    // game.content.fillStyle = "#554"
    // game.content.fillRect(0, 0, 400, 300)
    // draw
    game.drawImage(paddle)
    game.drawImage(ball)
    for (var i = 0; i < window.blocks.length; i++) {
      var block = window.blocks[i]
      if (block.alive) {
        game.drawImage(block)
      }
    }
    game.context.fillText('分数：' + score,10,280)
  }
  s.update = function() {
    if (window.paused) {
      return
    }
    ball.move()
    // 判断游戏结束
    if (ball.y > paddle.y) {
      // 跳转到游戏结束的场景
      var end =  SceneEnd.new(game)
      game.replaceScene(end)
    }
    // 判断相撞
    if (paddle.collide(ball)) {
      // 这里应该调用一个ball.反弹() 来实现
      ball.反弹()
    }
    // 判断ball和block相撞
    for (var i = 0; i < window.blocks.length; i++) {
      var block = window.blocks[i]
      if (block.collide(ball)) {
        console.log('相撞');
        block.kill()
        ball.反弹()
        score += 10
        // 判断是否过关
        if (score == window.totalScore) {
          var win =  SceneWin.new(game)
          game.replaceScene(win)
        }
      }
    }
  }

  // mouse event
  var enableDrag = false
  game.canvas.addEventListener('mousedown', function(event) {
    var x = event.offsetX
    var y = event.offsetY
    // 检查是否点中了ball
    console.log('ball ',ball);
    if (ball.hasPoint(x, y)) {
      // 设置拖拽状态
      enableDrag = true
    }
  })
  game.canvas.addEventListener('mousemove', function(event) {
    var x = event.offsetX
    var y = event.offsetY
    if (enableDrag) {
      ball.x = x
      ball.y = y
    }
  })
  game.canvas.addEventListener('mouseup', function(event) {
    var x = event.offsetX
    var y = event.offsetY
    enableDrag = false
  })
  return s
}
