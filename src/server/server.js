var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('../../webpack.config.js')
var webpackMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware =require('webpack-hot-middleware');

import React from 'react'
import {renderToString} from 'react-dom/server'
import { Provider } from 'react-redux';
import { RouterContext, match } from 'react-router';
import Devtools from '../common/containers/devtools'

import configureStore from '../common/store/configureStore';
import { getUser } from '../common/api/user';
import routes from '../routes';
import packagejson from '../../package.json';

const app = express()
const renderFullPage = (html, initialState) => {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Isomorphic Redux Example</title>
        <link rel="stylesheet" type="text/css" href="/bundle/app.css">
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}; 
        </script>
        <script src="/bundle/bundle.js"></script>
      </body>
    </html>
  `;
}
if (process.env.NODE_ENV !== 'production'){
    const compiler = webpack(config)
    app.use(webpackMiddleware(compiler,{
        noInfo:true,
        publicPath:config.output.publicPath
    }))
    app.use(webpackHotMiddleware(compiler)) 
}else{
    app.use('/static',express.static(__dirname+'/../../bundle'))
}

app.get('*', function response(req, res) { 
  
    getUser(user =>{
        if (!user) { return res.status(401).end('Not Authorised')}
    
        match({routes,location:req.url},(error,redirectLoaction,renderProps) =>{
            if (error){
                res.status(500).send('Internal server error');
            }else if(redirectLoaction){
                res.redirect(302, redirectLocation.pathname + redirectLocation.search)
            }else if(renderProps){
                const store = configureStore({user : user, version : packagejson.version});
                const state = store.getState()
                const html = renderToString(
                  <Provider store={store}>         
                    <RouterContext {...renderProps} />
                  </Provider>
                )
                res.status(200).send(renderFullPage(html,state))
            }else{
                res.status(404).send('Not found')
            }
        })

    }) 
  // res.sendFile(path.join(__dirname, '../../bundle/index.html'));
});


app.listen(3000)
console.log('server start at 3000')