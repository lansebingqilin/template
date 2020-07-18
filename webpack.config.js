const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// filename必须包含name才能生成多个js或css
// filename必须包含name才能生成多个js或css
// filename必须包含name才能生成多个js或css
module.exports = {
    //多入口
    entry: {
        global:'./src/global.js',
        index: './src/pages/index/index.js',
        index1: './src/pages/page1/index.js',
        index2: './src/pages/page2/index.js',
        index3: './src/pages/page3/index.js',
        index4: './src/pages/page4/index.js',
        index5: './src/pages/page5/index.js',
    },
    output: {
        filename: 'js/[name][hash:8].js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: './dist',
        port: 3000, //端口号
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'] // 根据目标浏览器自动转换为相应es5代码
                  }
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            }, {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader,  'css-loader', 'postcss-loader', 'less-loader']
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name:'[name].[ext]',
                        outputPath: "assets/"
                    },
                  },
                ],
              },
        ]
    },
    plugins: [
        //4.x新版清除dist文件夹
        new CleanWebpackPlugin({}),

        // 生成多个html
        new MiniCssExtractPlugin({
            filename: 'css/[name][hash:8].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/pages/index/index.html',
            chunks: ['global','index']
        }),
        new HtmlWebpackPlugin({
            filename: 'index1.html',
            template: './src/pages/page1/index.html',
            chunks: ['index1']
        }),
        new HtmlWebpackPlugin({
            filename: 'index2.html',
            template: './src/pages/page2/index.html',
            chunks: ['index2']
        }),
        new HtmlWebpackPlugin({
            filename: 'index3.html',
            template: './src/pages/page3/index.html',
            chunks: ['index3']
        }),
        new HtmlWebpackPlugin({
            filename: 'index4.html',
            template: './src/pages/page4/index.html',
            chunks: ['index4']
        }),
        new HtmlWebpackPlugin({
            filename: 'index5.html',
            template: './src/pages/page5/index.html',
            chunks: ['index5']
        })
    ],
    //压缩css
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
}