module.exports = (config, env) => {
  console.log(config.plugins);
  config.optimization.runtimeChunk = false;
  config.output.filename = "static/js/[name].js";
  config.plugins[5].options.filename = "static/css/[name].css";
  config.plugins[5].options.moduleFilename = () => "static/css/main.css";
  config.optimization.splitChunks = {
    cacheGroups: {
      default: false,
    },
  };

  return config;
};
