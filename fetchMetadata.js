get(
  '/demo/api/33/metadata',
  {
    query: {
      'dataElements:fields': 'id,name',
      'dataElements:order': 'displayName:desc%0A',
    },
    headers: { 'content-type': 'application/json' },
  },
  state => {
    console.log(state.data.dataElements.length);
    return state;
  }
);