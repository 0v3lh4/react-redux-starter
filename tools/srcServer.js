import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const app = express();
const port = 9000;
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {colors:true},
}));

app.use(require('webpack-hot-middleware')(compiler, {
  log: console.log,
}));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
});
