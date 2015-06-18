var t = require('tap')
var tips = require('./index.js')

t.type(tips.tips, 'Array')
t.type(tips, 'function')
for (var i = 0; i < tips.tips.length; i ++) {
  t.equal(tips(i), tips.tips[i])
}
