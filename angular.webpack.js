const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const webpack = require("webpack");

module.exports = (config, options) => {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    global: require.resolve("global"),
    process: require.resolve("process/browser"),
    buffer: require.resolve("buffer/"),
  };

  config.plugins.push(
    new NodePolyfillPlugin(),
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
      global: ["global"], // optional but useful
    })
  );
  // Enable HMR
  if (
    options.configuration !== "production" &&
    options.configuration !== "web-production"
  ) {
    config.devServer = {
      ...config.devServer,
      hot: true,
      liveReload: true,
    };
  }
  return config;
};
