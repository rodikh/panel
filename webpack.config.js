const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    watch: true,
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, // which file needs to be read
                exclude: /node_modules/, // which folder needs not to be read
                loader: ['babel-loader'] // which transplier/compiler/plugin to compile files
            },{
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },{
                test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'url-loader?limit=100000'
            },{
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }, {
                test: /\.html$/,
                loader: "angular-templatecache-loader?module=Panel",
                include: path.join(__dirname, 'src/templates')
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{ from: './src/assets/', to: './assets/' }])
    ]
};
