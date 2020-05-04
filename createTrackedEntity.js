//Sample job to create Tracked Entity Instance and Enroll in a Program
createTEI({
    "trackedEntityType": "nEenWmSyUEp",
    "orgUnit": "g8upMTyEZGZ",
    "attributes": [
      {
        "attribute": "w75KJ2mc4zz", // Attribute Id for FirstName in DHIS2
        "value": dataValue("form.case.update.patient_first_name")(state) //Question in CommCare form
      },
      {
        "attribute": "zDhUuAYrxNC", // LastName attribute
        "value": dataValue("form.case.update.patient_family_name")(state)
      }/*,
      {
        "attribute": "h5FuguPFF2j", // Case Id
        "value": dataValue("id")(state)
      },
      {
        "attribute": "KdQqUHPqlqM", // Case Status
        "value": dataValue("form.case.update.patient_case_status")(state)
      }*/

    ],
    "enrollments": [
      {
          "orgUnit": "g8upMTyEZGZ",
          "program": "IpHINAT79UW", //enroll in COVID-19 program
          "enrollmentDate": dataValue("received_on")(state).substring(0,9),
          "incidentDate": dataValue("metadata.timeStart")(state).substring(0,9)
       }
     ]
  })
