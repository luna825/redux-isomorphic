var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('../../webpack.config.js')
var webpackMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware =require('webpack-hot-middleware');

import React from 'react'
import { Provider } from 'react-redux';
import { RoutingContext, match } from 'react-router';

// import configureStore from '../common/store/configureStore';
import { getUser } from '../common/api/user';
// import routes from '../routes';
import packagejson from '../../package.json';

const app = express()
const renderFullPage = (html, initialState) => {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Isomorphic Redux Example</title>
        <link rel="stylesheet" type="text/css" href="/static/app.css">
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}; 
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `;
}
const compiler = webpack(config)

app.use(webpackMiddleware(compiler,{
    noInfo:true,
    publicPath:config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

app.get('*', function response(req, res) {  
  res.sendFile(path.join(__dirname, '../../bundle/index.html'));
});


app.listen(3000)
console.log('server start at 3000')