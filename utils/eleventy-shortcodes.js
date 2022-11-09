const inspect = require('util').inspect;
const md = require('markdown-it')({
  html: true
});

module.exports = (config) => {
  config.addShortcode('debug', (content) => `<pre>${inspect(content, { depth: 10})}</pre>`);
  config.addShortcode('youtube', (id) => `<div class="video"><div class="video-container"><iframe width="640" height="360" src="https://www.youtube.com/embed/${id}" frameborder="0" allowfullscreen></iframe></div></div>`);
  config.addPairedShortcode('snippet', (content, icon) => `<div class="snippet">${icon ?? ''}<div>${md.render(content)}</div></div>`);
}