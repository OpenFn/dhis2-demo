alterState(state => {
  const cleanSet = state.data.dataValues.map(x => {
    if (x.value > 1000) {
      // Entries must be in single units, we specified thousands.
      x.value = x.value / 1000;
      return x;
    }
    return x;
  });
  state.data.dataValues = cleanSet;
  return state;
});
