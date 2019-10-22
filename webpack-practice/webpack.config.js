const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: "./src/js/main.js",
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ] 
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({

        // })
    ]
    
}