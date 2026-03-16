const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CopyPlugin({
      patterns: [
        { from: "img", to: "img" },
        { from: "css", to: "css" },
        { from: "js/app.js", to: "js/app.js" },
        { from: "js/jquery.js", to: "js/jquery.js" },
        { from: "js/bootstrap.min.js", to: "js/bootstrap.min.js" },
        { from: "js/jquery.parallax.js", to: "js/jquery.parallax.js" },
        { from: "js/smoothscroll.js", to: "js/smoothscroll.js" },
        { from: "js/wow.min.js", to: "js/wow.min.js" },
        { from: "js/custom.js", to: "js/custom.js" },
        { from: "ball.html", to: "ball.html" },
        { from: "clock.html", to: "clock.html" },
        { from: "icon.svg", to: "icon.svg" },
        { from: "favicon.ico", to: "favicon.ico" },
        { from: "robots.txt", to: "robots.txt" },
        { from: "icon.png", to: "icon.png" },
        { from: "404.html", to: "404.html" },
        { from: "site.webmanifest", to: "site.webmanifest" },
      ],
    }),
  ],
});
