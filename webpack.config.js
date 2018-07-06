const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'cube': './src/demos/cube/main',
        'reflections': './src/demos/reflections/main',
        'perlin-noise-sphere': './src/demos/perlin-noise-sphere/main'
    },
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './build')
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test: /\.(fs|vs)$/,
                use: 'raw-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunks: ['cube'],
            filename: 'cube.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunks: ['reflections'],
            filename: 'reflections.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunks: ['perlin-noise-sphere'],
            filename: 'perlin-noise-sphere.html'
        }),
    ]
}
