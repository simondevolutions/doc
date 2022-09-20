const inspect = require('util').inspect;

module.exports = (config) => {
  config.addShortcode('debug', (content) => `<pre>${inspect(content, { depth: 10})}</pre>`);
}