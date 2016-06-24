var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
    context: __dirname,

    entry: {
        main: './static/js/index',
    },

    output: {
        path: path.resolve('./build/bundles/'),
        filename: "[name]-[hash].js",
    },

    plugins: [
        new BundleTracker({filename: './build/webpack-stats.json'}),
    ],

    devtool: "source-map",

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.sass$/,
                loaders: ["style", "css?sourceMap", "sass?sourceMap"],
            },
        ],
    },

    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        extensions: ['', '.js', '.jsx'],
        modules: ['./static/js'],
    },
};
