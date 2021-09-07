const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: ['./src/js/index.js', './src/sass/index.scss'],
    search: ['./src/js/search.js', './src/sass/search.scss']
  },
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: '[name]_bundle.js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        exclude: /node_modules/,
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        exclude: /node_modules/,
      },
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        exclude: /node_modules/,
      }
    ]
  },
  devtool: 'source-map'
};