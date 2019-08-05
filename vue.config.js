const VconsolePlugin = require('vconsole-webpack-plugin');

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    plugins: [new VconsolePlugin({ enable: process.env.NODE_ENV !== 'production' })],
  },
};
