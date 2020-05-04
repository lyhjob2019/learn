var loadLevel = function(game,n) {
  n = n - 1
  var level = levels[n]
  var blocks = []
  window.totalScore = 0
  for (var i = 0; i < level.length; i++) {
    var p = level[i]
    var b = Block(game,p)
    blocks.push(b)
    window.totalScore += (b.lifes * 10)
  }
  return blocks
}
// debug
window.paused = false
var enableDebug = function(game, enable){
  window.addEventListener('keydown',function(event){
    var k = event.key
    if (k == 'p') {
      window.paused = !window.paused
    }else if ('1234567'.includes(k)) {
      // window.blocks = loadLevel(game, Number(k))
      return
    }
  })
  // 控制速度
  document.querySelector('#id-input-speed').addEventListener('input',function(event){
    var input = event.target
    window.fps = Number(input.value)
  })
}



var _main = function(){
  var images = {
    bullet: 'img/bullet1.png',
    cloud: 'img/cloud.png',
    player: 'img/player.png',
    sky: 'img/sky.png',
    enemy0: 'img/enemy0.png',
    enemy1: 'img/enemy1.png',
    // enemy2: 'img/enemy2.png',
    fire: 'img/bullet2.png',
  }
  var game =  GuaGame.instance(60, images,function(g){
    // var s = new Scene(g)
    var s = new SceneTitle(g)
    g.runWithScene(s)
  })

  enableDebug(game,true)

}
_main()
