import webpack from 'webpack';
import path from 'path';

export default {
  debug: true,
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'src/index'),
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['react-hot', 'babel'] },
      { test: /\.css$/, loaders: ['style', 'css'] },
    ],
  },
};
