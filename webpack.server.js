const Path = require('path');

module.exports = {
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: Path.resolve(__dirname, 'build')
  },
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        preset: ['react', 'stage-0', ['env', {
          target: {
            browsers: ['last 2 versions']
          }
        }]]
      }
    }]
  }
}