const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve('./src'),
    },
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.min.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
