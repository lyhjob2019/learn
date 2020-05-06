const log = console.log.bind(console)
// log('标准穿肠过，理念心中留')
// var e = sel => document.querySelector(sel)
// var log = function(s) {
//   e('#id-text-log').value += '\n' + s
// }
// 载入图片
const imageFromPath = function(path) {
  var img = new Image()
  img.src = path
  return img
}
// 相撞
const rectIntersects = function(a,b){
  var o = a
  if (b.y > o.y && b.y < o.y + o.img.height) {
    if (b.x > o.x && b.x < o.x + o.img.width) {
      return true
    }
  }
  return false
}
// const可以确保声明的名字不被任何人修改
const randomBetween = function(start, end) {
  var n = Math.random() * (end - start + 1)
  return Math.floor(n + start)
}

const aInb = function(x, x1, x2){
  return x >= x1 && x <= x2
}
