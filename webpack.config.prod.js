import path from 'path';
//import webpack from 'webpack'
export default {
  devtool: 'source-map',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer:{
    contentBase: path.resolve(__dirname, 'src')
  },
  plugins: [

  ],
  optimization: {
    minimize: true,
    mergeDuplicateChunks: true
  }


}
