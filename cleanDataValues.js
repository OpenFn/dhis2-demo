alterState(state => {
  // Copy and sort the values, rather than operating on the object array
  var values = state.data.dataValues
    .map(x => x.value)
    .concat()
    .sort((a, b) => a - b);

  console.log('Intial array length: ' + values.length);

  // Then find a generous IQR. This is generous because if (values.length / 4)
  // is not an int, then really you should average the two elements on either
  // side to find q1.

  const q1 = values[Math.floor(values.length / 4)];
  console.log('q1 value: ' + q1);

  // Likewise for q3.
  const q3 = values[Math.ceil(values.length * (3 / 4))];
  console.log('q3 value: ' + q3);
  const iqr = q3 - q1;
  console.log('iqr = ' + iqr);

  // Then find min and max values
  const maxValue = parseFloat(q3) + parseFloat(iqr) * 1.5;
  console.log('Max allowed value: ' + maxValue);
  const minValue = q1 - iqr * 1.5;
  console.log('Min allowed value: ' + minValue);

  var outliers = [];

  // Then filter anything beyond or beneath these values.
  var cleanSet = state.data.dataValues.filter(x => {
    if (x.value <= maxValue && x.value >= minValue) {
      return true;
    }
    outliers.push(x);
  });

  console.log('Removed ' + outliers.length + ' outliers.');
  console.log(cleanSet.length + ' dataValues will be imported.');

  console.warn('Discarded data for analysis:');
  console.warn(JSON.stringify(outliers, null, 2));

  state.data.dataValues = cleanSet;
  return state;
});
