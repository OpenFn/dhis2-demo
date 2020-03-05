post(
  '/myendpoint',
  {
    body: { foo: 'bar' },
    headers: { 'content-type': 'json' },
    authentication: { username: 'user', password: 'pass' },
  },
  function(state) {
    return state;
  }
);
