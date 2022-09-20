module.exports = (config) => {
  config.addCollection('eleventyNavigationTree', function(collectionApi) {
    let result = [];
    let level = { result };

    collectionApi.getFilteredByGlob('**/*.md')
      .forEach(file => {
        file.filePathStem.replace('/', '').split('/').reduce((previousFiles, currentFile) => {
          if (currentFile === "index") {
            return;
          }

          if (!previousFiles[currentFile]) {
            previousFiles[currentFile] = { result: [] };
            previousFiles.result.push({ name: currentFile, children: previousFiles[currentFile].result });
          }

          return previousFiles[currentFile]
        }, level);
      });

    function loopBranch(branch, parent) {
      const filePath = parent ? `${parent}/${branch.name}` : `${branch.name}`;

      const page = collectionApi.getFilteredByGlob('**/*.md').find(obj =>
        obj.filePathStem === `/${filePath}/index` || obj.filePathStem === `/${filePath}`
      )

      const obj = {}
      
      if (page) {
        obj.url = page.url;
        obj.filePathStem = page.filePathStem;
        obj.order = page.data.order;
        obj.title = page.data.title;
        obj.hasData = !!page.template.frontMatter.content;
      }

      if (branch.children) {
        branch.children = branch.children.map(item => loopBranch(item, filePath))
          .sort((a, b) => {
            const aHas = typeof a.order !== 'undefined';
            const bHas = typeof b.order !== 'undefined';
            return bHas - aHas || (aHas === true && a.order - b.order) || a.name.localeCompare(b.name)
          });
      }

      return {
        ...obj,
        ...branch,
      }
    }

    return result.map((branch) => loopBranch(branch));
  });
}