get('/demo/api/33/metadata', {
  query: {
    'dataElements:fields':
      'id,name,aggregationType,domainType,valueType,shortName',
    'dataElements:order': 'displayName:desc%0A',
  },
  headers: { 'content-type': 'application/json' },
});
