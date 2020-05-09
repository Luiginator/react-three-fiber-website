const withSass = require("@zeit/next-sass");

module.exports = {
  ...withSass(),
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.raw$/i,
      use: "raw-loader",
    });

    return config;
  },
};
