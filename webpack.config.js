const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: "umd",
    library: "algorand-wallet-selector",
    umdNamedDefine: true,
    globalObject: "this"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        resolve: {
          extensions: [".jsx", ".js", ".json"]
        }
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 65535,
              name: "static/media/[name].[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  }
};