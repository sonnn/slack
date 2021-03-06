var test = require('tape')
var slack = require('..').api.test

test('env', t=> {
  t.ok(slack, 'slack.api.test exists')
  t.end()
})

test('can call the api', t=> {
  slack({test:'hello world'}, (err, res)=> {
    if (err) {
      t.fail(err, err)
    }
    else {
      t.ok(res, 'gotta response')
      console.log(res)
    }
    t.end()
  })
})

test('can pass an error', t=> {
  t.plan(1)
  slack({error:'wtfjs'}, (err, res)=> {
    if (err) {
      t.ok(err, 'got an error!')
      console.log(err)
    }
    else {
      t.fail(res, 'error did not bubble')
      console.log(err, res)
    }
  })
})
