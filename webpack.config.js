const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = env => {
    return {
        stats: 'errors-only',
        entry: path.join(__dirname, '/src/index.js'),
        output: {
            path: path.join(__dirname, "deploy"),
            filename: 'js/flumpTest.bundle.js'
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: 'index.html'
            }),
            new CopyWebpackPlugin([
                { from: 'assets', to: 'assets' }
            ])
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        },
        devServer: {
            open: true,
            port: 8080,
            public: 'localhost:8080',
            host: "0.0.0.0",
            disableHostCheck: true,
            overlay: true
        },
        devtool: env.dev ? 'eval-source-map' : ''
    };
};