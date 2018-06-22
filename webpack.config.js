"use strict";

const webpack = require("webpack");
const path = require("path");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
  context: path.join(__dirname, "/src/scripts"),
  entry: {
    chartrend: "./index.ts"
  },
  output: {
    path: path.join(
      __dirname,
      process.env.NODE_ENV === "production" ? "/dist" : "/public"
    ),
    filename: "[name].js",
    publicPath: "/scripts/"
  },
  resolve: {
    extensions: [".ts", ".js", ".json"]
    // modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "ts-loader",
          options: {}
        }
      }
    ]
  },
  devtool: "source-map",
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: "localhost",
      port: 3000,
      server: { baseDir: ["public"] }
    })
  ]
};
