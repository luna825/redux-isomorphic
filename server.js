var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.config.js')
var webpackMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware =require('webpack-hot-middleware');

const app = express()
const compiler = webpack(config)

app.use(webpackMiddleware(compiler,{
    noInfo:true,
    publicPath:config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

app.get('*', function response(req, res) {  
  res.sendFile(path.join(__dirname, 'bundle/index.html'));
});


app.listen(3000)
console.log('server start at 3000')