const { toc } = require('../docs/_filters/toc');

module.exports = (config) => {
  config.addFilter('localized', function (value) {
    value = value.startsWith('/en/') ? value.replace('/en/', '/') : value;
    value = value.endsWith('/index') ? value.replace('/index', '/') : value;

    return value;
  });

  config.addFilter('toc', toc);
}