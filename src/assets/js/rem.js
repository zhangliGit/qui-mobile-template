
;(function () {
  var screenW = document.documentElement.clientWidth || document.body.clientWidth
  var hDom = document.getElementsByTagName('html')[0]
  if (screenW > 496) screenW = 496
  hDom.style.fontSize = screenW / 18.75 + 'px'
}())
