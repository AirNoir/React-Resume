const webapack = require('webpack');
const path = require('path');
const ASSETS_PATH = '/assets';

module.exports = {
    context: path.join(__dirname, '/src'),
    entry: ['./index.js'],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/assets'),
        publicPath: ASSETS_PATH
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components/'),
            containers: path.resolve(__dirname, 'src/containers/'),
            actions: path.resolve(__dirname, 'src/actions/'),
            reducers: path.resolve(__dirname, 'src/reducers/'),
        },
        extensions:['.js','jsx','.json','.css']
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css|sass|scss)$/,
                loaders: [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(png|gif|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    }



}