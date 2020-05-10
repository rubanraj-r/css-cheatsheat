module.exports = {
  entry: __dirname + '/src/main/main.jsx',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 4014,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|s[ac]ss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};