//Sample job to create a new Track Entity Instance to log a new COVID-19 case
createTEI({
    "trackedEntityType": "nEenWmSyUEp",
    "orgUnit": "g8upMTyEZGZ",
    "attributes": [
      {
        "attribute": "w75KJ2mc4zz", // Attribute Id for FirstName
        "value": dataValue("form.case.update.patient_first_name")(state) //CommCare Question
      },
      {
        "attribute": "zDhUuAYrxNC", 
        "value": dataValue("form.case.update.patient_family_name")(state)
      }
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
