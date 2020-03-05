alterState(state => {
  state.simpleDVs = {
    dataValues: state.data.dataValues
      .filter(x => x.orgUnit === 'jNb63DIHuwU')
      .map(x => {
        delete x.categoryOptionCombo;
        delete x.attributeOptionCombo;
        return x;
      }),
  };
  return state;
});

post('/api/33/dataValueSets', {
  body: state => state.simpleDVs,
  headers: { 'content-type': 'application/json' },
});
