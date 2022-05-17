const { merge } = require('webpack-merge');

const developmentConfig = require('./webpack.development');
const productionConfig = require('./webpack.production');
const commonConfig = require('./webpack.common');

module.exports = (env, args) => {
  switch(args.mode) {
    case 'development':
      return merge(commonConfig, developmentConfig);
    case 'production':
      return merge(commonConfig, productionConfig);
    default:
      throw new Error('No matching configuration was found!');
  }
}
