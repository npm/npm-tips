var fs = require('fs')
var tips = fs.readFileSync(__dirname + '/tips.txt', 'utf8').trim().split('\n').filter(function (t) {
  t = t.trim()
  return t && t.charAt(0) !== '#'
})
var len = tips.length

module.exports = function (n) {
  return tips[n === 0 || n && n < len ? n : Math.floor(Math.random() * len)]
}

module.exports.tips = tips
