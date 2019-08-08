const path = require("path");

module.exports = {
  entry: "./js/zadanie02.js",
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, "build")
  },
  watch: true,
  mode: "production",
  module: {
    rules: [

      // Obsługa plików React JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  }
};

// --require jsdom-global/register
// --reporter ./tests/mocha-reporter.js