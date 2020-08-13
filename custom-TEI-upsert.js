//DHIS2 API sometimes does not support upserts if you do not have the dhis2-generated Id for a resource
//This job creates a custom upsert pattern for searching for existing Tracked Entity Instances based on a
//different UID attribute, and then updates or creates a new TEI accordingly.

//1. First search for existing TEI
get(
  '/api/29/trackedEntityInstances/query.json',
  {
    query: {
      ou: 'e5CYXI5Ncay',
      ouMode: 'ACCESSIBLE',
      program: 'NGtZYxE0zFM',
      filter: `nvn9I8VnPgz:LIKE:${state.data.csvData.nvn9I8VnPgz}`, //query existing TEIs using the unique Id attribute to search for existing
      pageSize: 50,
      page: 1,
      totalPages: true,
    },
  },
  //2. Log response from DHIS2
  state => {
    const row1 = state.data.rows[0]; //return any found TEIs
    state.tei = row1 ? '/' + row1[0] + '?strategy=CREATE_AND_UPDATE' : '';
    console.log(`Searched for existing TEI: ${state.tei}`);
    return state;
  }
);
alterState(state => {
  // Note: we don't care about anything in the response except the TEI id, so we
  // restore state.data to the initial csvData here.
  state.data = state.references[0];
  state.boolean = value => {
    //custom function transform yes/no values to boolean
    var val = value !== undefined ? value.toString().toLowerCase() : '';
    var newVal = '';
    if (val !== null && val.trim() === 'yes') {
      newVal = true;
    } else if (val !== null && val.trim() === 'no') {
      newVal = false;
    }
    return newVal;
  };
  state.attr = (id, value) => {
    // custom function to return attribute set with value
    return {
      attribute: id,
      value: value,
    };
  };
  state.dateConvert = value => {
    //custom function to convert date
    var dateArr = value ? value.split('/') : null;
    if (!dateArr) {
      return '';
    }
    const mm = dateArr[0] < 10 ? '0' + dateArr[0] : dateArr[0];
    const dd = dateArr[1] < 10 ? '0' + dateArr[1] : dateArr[1];
    var newDate = dateArr[2] + '-' + mm + '-' + dd;
    return newDate;
  };
  state.body = {
    trackedEntityType: 'MCPQUTHX1Ze',
    orgUnit: state.data.csvData['Org Unit UID'],
    attributes: [
      state.attr('nvn9I8VnPgz', state.data.csvData.nvn9I8VnPgz), //Unique Id
      state.attr('bnQOk4Plo9Z', state.data.csvData.bnQOk4Plo9Z), //UTNWF Staff
      state.attr('TLjYqcKwhxP', state.data.csvData.TLjYqcKwhxP), //Beneficiary Name
      state.attr('ScSWoiqvdp5', state.data.csvData.ScSWoiqvdp5), //ID No
      state.attr('j38AUmNNy18', state.data.csvData.j38AUmNNy18), //Age
      state.attr('F2FjwHE7MTs', state.data.csvData.F2FjwHE7MTs), //Sex
      state.attr('g5QDO6GPgiJ', state.data.csvData.g5QDO6GPgiJ), //Telephone
      state.attr('zC1KsiGDVMk', state.data.csvData.zC1KsiGDVMk), //Village
      state.attr('cUqyRxPt1U7', state.boolean(state.data.csvData.cUqyRxPt1U7)), //convert to boolean
    ],
    enrollments: [
      {
        program: 'NGtZYxE0zFM',
        programStage: 'wewcqVyGL5z',
        orgUnit: dataValue('csvData.Org Unit UID')(state),
        enrollmentDate: state.dateConvert(dataValue('csvData.START DATE (MM/YY)')(state)),
        incidentDate: state.dateConvert(dataValue('csvData.START DATE (MM/YY)')(state)),
        events: [
          //Create 2 Events
          {
            //Event #1
            program: 'NGtZYxE0zFM',
            programStage: 'wewcqVyGL5z',
            orgUnit: dataValue('csvData.Org Unit UID')(state),
            eventDate: state.dateConvert(dataValue('csvData.START DATE (MM/YY)')(state)),
            status: 'COMPLETED',
            storedBy: 'Test',
            orgUnitName: dataValue('csvData.Org unit')(state),
            attributeCategoryOptions: dataValue('csvData.Category option UID')(state),
            optionSize: 0,
            attributeOptionCombo: 'C1O4lnx0Ibz',
            coordinate: {
              latitude: dataValue('csvData.LATITUDE (NORTH+/ SOUTH-)')(state),
              longitude: dataValue('csvData.LATITUDE (EAST/ WEST)')(state),
            },
            dataValues: [
              {
                //Col Q
                dataElement: 'vAh7VEB6L0f',
                value: state.boolean(dataValue('csvData.vAh7VEB6L0f')(state)),
              },
              {
                //Col R
                dataElement: 'IyW6h3oi1Gd',
                value: dataValue('csvData.IyW6h3oi1Gd')(state),
              },
              {
                //Col S
                dataElement: 'LZ0FOPRvtdm',
                value: state.boolean(dataValue('csvData.LZ0FOPRvtdm')(state)),
              },
            ],
          },
          {
            //Event #2
            program: 'NGtZYxE0zFM',
            programStage: 'XjDnSd7whRX',
            orgUnit: dataValue('csvData.Org Unit UID')(state),
            eventDate: state.dateConvert(dataValue('csvData.START DATE (MM/YY)')(state)),
            status: 'COMPLETED',
            storedBy: 'Test',
            orgUnitName: dataValue('csvData.Org unit')(state),
            attributeCategoryOptions: dataValue('csvData.Category option UID')(state),
            optionSize: 0,
            attributeOptionCombo: 'C1O4lnx0Ibz',
            coordinate: {
              latitude: dataValue('csvData.LATITUDE (NORTH+/ SOUTH-)')(state),
              longitude: dataValue('csvData.LATITUDE (EAST/ WEST)')(state),
            },
            dataValues: [
              {
                dataElement: 'v0BrGE6G7AQ',
                value: dataValue('csvData.v0BrGE6G7AQ')(state),
              },
              {
                dataElement: 'EEZzeoqGAnw',
                value: dataValue('csvData.EEZzeoqGAnw')(state),
              },
              {
                dataElement: 'W7BZ5guSSNo',
                value: dataValue('csvData.W7BZ5guSSNo')(state),
              },
              {
                dataElement: 'gMhSEmk7iWS',
                value: dataValue('csvData.gMhSEmk7iWS')(state),
              },
              {
                dataElement: 'jISuVoGSmqO',
                value: dataValue('csvData.jISuVoGSmqO')(state),
              },
              {
                dataElement: 'KpEeTQLF48d',
                value: dataValue('csvData.KpEeTQLF48d')(state),
              },
              {
                dataElement: 'kGjccxB7FwQ',
                value: dataValue('csvData.kGjccxB7FwQ')(state),
              },
            ],
          },
        ],
      },
    ],
  };
  return state;
});
//3. Upsert the TEI by either sending a PUT or POST request
request({
  auth: {
    user: state.configuration.username,
    pass: state.configuration.password,
  },
  method: state => (state.tei ? 'PUT' : 'POST'), //if tei was found in search, update with PUT; otherwise insert with POST
  url: state => `/api/29/trackedEntityInstances${state.tei}`,
  json: state => state.body,
});
