const http = require('http')
const {exec} = require('child_process')
const path = require('path')

let started = false
let run
http.createServer(function(req, res) {
  res.setHeader('Content-Type', 'application/json')
  console.log(req.url)
  if(req.url.includes('start') && !started) {
    run = exec(`${path.resolve(__dirname, '../node_modules/.bin/webpack-dev-server')} ${path.resolve(__dirname, '../webpack.config.js')}`)
    started = true
    res.write(JSON.stringify({started: 'ok'}))
  } else if(req.url.includes('stop') && started) {
    run.kill()
    res.write(JSON.stringify({killed: 'ok'}))
    started = false
  } else {
    res.write(JSON.stringify({resp: 'unsupported operation'}))
  }

  res.end()

}).listen(9090)
