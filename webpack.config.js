var webpack = require('webpack')
module.exports={
    devtool:"eval",
    entry:[
        'webpack/hot/dev-server' , 
        'webpack-hot-middleware/client', 
        './src/index.js'
    ],
    output:{
        path:__dirname+'/bundle',
        filename:'bundle.js',
        publicPath:'/bundle/'
    },
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
    ]
}