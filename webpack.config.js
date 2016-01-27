var webpack = require('webpack')
var merge = require('merge')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path')

var webpackConfig={
    output:{
        path: path.join(__dirname, 'bundle'),
        filename:'bundle.js',
        publicPath:'/bundle/'
    }
}

if (process.env.NODE_ENV === 'production'){
    webpackConfig = merge(webpackConfig,{
        devtool:"source-map",
        entry:[
            './src/index.js'
        ],
        module:{
            loaders:[
                {
                    test:/\.js$/,
                    exclude:/node_modules/,
                    loader:'babel',
                    query:{
                        presets:['react','es2015']
                    }
                },
                { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap') }
            ]
        },
        plugins:[
            new webpack.DefinePlugin({
                'process.env':{
                    NODE_ENV: JSON.stringify('production')
                }
            }),
            new ExtractTextPlugin("app.css"),
            new webpack.optimize.UglifyJsPlugin({minimize: true})
        ]
    })
}else{
    webpackConfig = merge(webpackConfig,{
        devtool:'inline-source-map',
        devServer:{
            contentBase:'bundle'
        },
        module:{
            loaders:[
                {
                    test:/\.js$/,
                    exclude:/node_modules/,
                    loader:'babel',
                    query:{
                        presets:['react','es2015']
                    }
                },
                {
                    test:/\.css$/,
                    loader:'style!css'
                }
            ]
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
        ],
        entry:[
            'webpack/hot/dev-server' , 
            'webpack-hot-middleware/client', 
            './src/index.js'
        ]
    })
}

module.exports = webpackConfig;