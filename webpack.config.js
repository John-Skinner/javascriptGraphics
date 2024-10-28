const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  mode:'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
      new HtmlWebpackPlugin({
        title:'Output Management',
        template:'template/index.html',
      })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean:true,
  },

};