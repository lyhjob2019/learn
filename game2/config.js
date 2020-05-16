// 这就是单例
// 程序不是说语法有多复杂，而是要实现功能，而且是很好地实现功能
// 如果它能实现你所有的功能并且没有任何问题
// 那它就是最好的工具
// 永远config就是一个实例
// 所谓单例就是全局变量
const config = {
    fps: 10,
    player_speed: 5,
    bullet_speed:10,
    fire_cooldown:10,
    alien:{
      run:{
        sx: 390,
        sy: 200,
        sw: 90,
        sh: 130,
        w: 90,
        h: 130,
        framecount: 6,
        displacement: 145,
      },
      idle:{
        sx: 390,
        sy: 60,
        sw: 90,
        sh: 130,
        w: 90,
        h: 130,
        framecount: 4,
        displacement: 145,
      }
    }
}
