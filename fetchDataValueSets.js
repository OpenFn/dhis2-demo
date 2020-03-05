get(
  '/demo/api/33/dataValueSets',
  {
    query: {
      dataSet: 'pBOMPrpg1QX',
      dataSet: 'BfMAe6Itzgt',
      startDate: '2013-01-01',
      endDate: '2020-01-31',
      orgUnit: 'YuQRtpLP10I',
      orgUnit: 'vWbkYPRmKyS',
      children: 'true',
    },
    headers: { 'content-type': 'application/json' },
  },
  state => {
    delete state.references;
    return state;
  }
);