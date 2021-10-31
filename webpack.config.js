const path = require('path');

module.exports = {
    entry: './src/renderer/index.tsx',
    mode: 'development',
    target: 'electron-renderer',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'renderer/bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
