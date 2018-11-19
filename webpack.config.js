const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const AntdScssThemePlugin = require('antd-scss-theme-plugin');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.less', '.scss', '.json']
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.min.js'
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                loaders: [
                    'awesome-typescript-loader',
                ],
                exclude: [/node_modules/, /\.(spec|e2e)\.ts(x?)$/],
            },
            {
              test: /\.jpe?g$|\.gif$|\.png$/i,
              loader: 'url-loader?limit=10000',
            },
            {
              test: /\.html$/,
              loader: 'html-loader',
            } ,{
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'style-loader',
                options: {
                  sourceMap: !isProduction,
                },
              },
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  sourceMap: !isProduction,
                  modules: true,
                  camelCase: true,
                  localIdentName: '[name]-[local]-[hash:base64:5]',
                },
              },
              AntdScssThemePlugin.themify({
                loader: 'sass-loader',
                options: {
                  sourceMap: !isProduction,
                },
              }),
            ],
          },
          {
            test: /\.css$/,
            use: [
              {
                loader: 'style-loader',
                options: {
                  sourceMap: !isProduction,
                },
              },
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  sourceMap: !isProduction,
                },
              }
            ],
          },
    ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new AntdScssThemePlugin(path.join(__dirname, 'src', 'styles', 'theme.scss'))
        
    ],
    watchOptions: {
        ignored: /dist/,
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true
    }
}