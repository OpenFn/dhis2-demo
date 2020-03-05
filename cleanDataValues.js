alterState(state => {
  const cleanSet = state.data.dataValues.map(x => {
    if (x.value > 1000) {
      // NOTE: Entries must be in single units, we specified thousands.
      console.log(
        'Found value reported in single units: ' + JSON.stringify(x, null, 2)
      );
      x.value = x.value / 1000;
      console.log('Converted to thousands.');
      return x;
    }
    return x;
  });
  state.data.dataValues = cleanSet;
  return state;
});
