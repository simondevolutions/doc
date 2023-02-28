const { autocomplete, getAlgoliaResults, getAlgoliaFacets } = window['@algolia/autocomplete-js'];

const searchClient = algoliasearch(
  'LNWCTDWZS0',
  'e51799c9709067fc3bcab5ec439fa770'
);

autocomplete({
  container: '#algolia-autocomplete',
  placeholder: document.querySelector('#algolia-autocomplete').dataset.placeholder,
  detachedMediaQuery: '',
  defaultActiveItemId: 0,
  getSources() {
    return [
      {
        sourceId: 'hits',
        getItems({ query }) {
          return getAlgoliaResults({
            searchClient,
            queries: [
              {
                indexName: document.querySelector('#algolia-autocomplete')
                  .dataset.index,
                query,
                params: {
                  hitsPerPage: 18,
                },
              },
            ]
          });
        },
        getItemUrl({ item }) {
          return item.url;
        },
        onActive({ item, setContext }) {
          setContext({ preview: item });
        },
        templates: {
          item({ item, components, html }) {
            return html`<a class="aa-ItemLink" href="${item.url}">
              <div class="aa-ItemContent">
                <div className="aa-ItemIcon">
                  <img src="${item.icon}" alt="${item.doc}" width="24" height="24"/>
                </div>
                <div class="aa-ItemContentBody">
                  <div class="aa-ItemContentTitle">
                    ${components.Highlight({
                      hit: item,
                      attribute: 'title',
                    })}
                    
                  </div>
                  <div class="aa-ItemContentContent">
                    ${components.Highlight({
                      hit: item,
                      attribute: 'content',
                    })}
                  </div>
                </div>
              </div>
            </a>`;
          },
        },
      },
      // {
      //   sourceId: 'suggestions',
      //   getItems({ query }) {
      //     return getAlgoliaResults({
      //       searchClient,
      //       queries: [
      //         {
      //           indexName: document.querySelector('#algolia-autocomplete')
      //           .dataset.index,
      //           query,
      //           params: {
      //             hitsPerPage: 4,
      //           },
      //         },
      //       ],
      //     });
      //   },
      //   onSelect({ item, setQuery, setIsOpen, refresh }) {
      //     setQuery(`${item.query} `);
      //     setIsOpen(true);
      //     refresh();
      //   },
      //   templates: {
      //     header({ html }) {
      //       return html`<span className="aa-SourceHeaderTitle">
      //         Can't find what you're looking for?
      //       </span>
      //       <div className="aa-SourceHeaderLine" />`;
      //     },
      //     item({ item, components, html }) {
      //       return html`<div className="aa-QuerySuggestion">
      //         ${components.ReverseHighlight({
      //           hit: item,
      //           attribute: 'query'
      //         })}
      //       </div>`;
      //     },
      //   },
      // },
    ];
  },
  render({ children, render, state, components, html }, root) {
    const { preview } = state.context;

    render(
      html`<div className="aa-Grid">
        <div className="aa-Results aa-Column">${children}</div>
        <div className="aa-Preview aa-Column">
          <div className="aa-PreviewTitle">
            ${components.Highlight({
              hit: preview,
              attribute: 'title'
            })}
          </div>
          <div className="aa-PreviewDescription">
            ${components.Highlight({
              hit: preview,
              attribute: 'content'
            })}
          </div>
        </div>
      </div>`,
      root
    );
  },
});