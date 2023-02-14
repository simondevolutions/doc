module.exports = (config) => {
  config.addCollection('eleventyNavigationTree', function(collectionApi) {
    let tree = [];

    collectionApi.getAll().filter((item) => 'trees' in item.data).forEach(item => {
      item.data.trees.forEach(t => {
        let currentLevel = tree;
        const pathTree = `/${item.data.lang}/${t}/`;
        let url = item.url.replace(`/${item.data.tree}/`, `/${t}/`);
        item.filePathStem = item.filePathStem.replace(`/${item.data.tree}/`, `/${t}/`);

        if (!item.url) {
          return;
        }

        if (!item.filePathStem.startsWith(pathTree)) {
          item.filePathStem = item.filePathStem.replace(`/${item.data.lang}/`, pathTree);
          url = item.data.lang === 'en' ? `/${t}${item.url}` : item.url.replace(`/${item.data.lang}/`, pathTree);
        }

        item.filePathStem.replace('/', '').replace('/index', '').split('/').forEach((part, i, arr) => {
          const existingPath = findWhere(currentLevel, 'name', part);

          if (existingPath) {
            if (i ===  arr.length - 1 && !Object.hasOwn(existingPath, 'url')) {
              existingPath.filePathStem = item.filePathStem;
              existingPath.url = url;
              existingPath.order = item.data.order;
              existingPath.title = item.data.title;
              existingPath.hasData = !!item.template.frontMatter.content;
            }

            currentLevel = sortTree(existingPath.children);
          } else {
            let newPart = {
              name: part,
              children: []
            }

            if (i ===  arr.length - 1) {
              newPart.filePathStem = item.filePathStem;
              newPart.url = url;
              newPart.order = item.data.order;
              newPart.title = item.data.title;
              newPart.hasData = !!item.template.frontMatter.content;
            }

            currentLevel.push(newPart);
            currentLevel = sortTree(newPart.children);
          }
        });
      });
    });

    function sortTree(array) {
      return array.sort((a, b) => {
        const aHas = typeof a.order !== 'undefined';
        const bHas = typeof b.order !== 'undefined';
        return bHas - aHas || (aHas === true && a.order - b.order) || a.name.localeCompare(b.name)
      })
    }

    function findWhere(array, key, value) {
      t = 0;
      while (t < array.length && array[t][key] !== value) { t++; };

      if (t < array.length) {
        return array[t];
      } else {
        return false;
      }
    }

    return tree;
  });
}