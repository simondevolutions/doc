const eleventyFilter = require('./utils/eleventy-filter');
const eleventyNavigationTree = require('./utils/eleventy-navigation-tree');
const eleventySass = require('./utils/eleventy-sass');
const eleventyShortcode = require('./utils/eleventy-shortcode');

module.exports = function (config) {
  config.addPlugin(eleventySass);
  config.addPlugin(eleventyFilter);
  config.addPlugin(eleventyShortcode);
  config.addPlugin(eleventyNavigationTree);

  config.addPassthroughCopy('img');

  return {
    dir: {
      input: 'docs',
      output: 'dist'
    }
  }
}