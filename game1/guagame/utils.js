var log = console.log.bind(console)
// log('标准穿肠过，理念心中留')
// var e = sel => document.querySelector(sel)
// var log = function(s) {
//   e('#id-text-log').value += '\n' + s
// }
// 载入图片
var imageFromPath = function(path) {
  var img = new Image()
  img.src = path
  return img
}
// 相撞
var rectIntersects = function(a,b){
  var o = a
  if (b.y > o.y && b.y < o.y + o.img.height) {
    if (b.x > o.x && b.x < o.x + o.img.width) {
      return true
    }
  }
  return false
}
