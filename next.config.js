const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

module.exports = withPlugins([[withCSS], [withSass]], {
  assetPrefix: '',
});
