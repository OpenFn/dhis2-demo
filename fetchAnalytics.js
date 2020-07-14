fetchAnalytics(
  {
    query: {
      dimension: [
        // male and female farmers trained...
        "dx:Uvn6LCg7dVU;BfMAe6Itzgt",
        "pe:LAST_6_MONTHS"
      ],
      filter: "ou:ImspTQPwCqd",
      displayProperty: "NAME",
      outputIdScheme: "UID"
    }
  },
  "https://www.openfn.org/inbox/inbox-uuid"
);

//Related DHIS2 documentation: https://docs.dhis2.org/2.25/en/developer/html/dhis2_developer_manual_full.html#webapi_analytics
