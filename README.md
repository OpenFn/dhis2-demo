# dhis2-demo
OpenFn sample jobs for automating DHIS2 data and metadata integration. These jobs either language the OpenFn adaptors [language-dhis2](https://github.com/OpenFn/language-dhis2) or [language-http](https://github.com/OpenFn/language-http). 

**For more examples**, check out [OpenFn Docs](https://docs.openfn.org/).

**Questions?** Post on the [OpenFn Forum](https://groups.google.com/forum/#!forum/openfn). 

## DHIS2 integration notes
- Every DHIS2 implementation is unique! How we can integrate depends on the version and configuration, so continuous testing is important. 
- Design for failure! Develop a strategy for uniquely identifying resources to be uploaded to DHIS2. 
- DHIS2 API does not always support upserts, so we typically need to implement a custom `upsert` pattern for importing data to DHIS2. This involves 2 API calls, where we first search for the resource in DHIS2, and then create or update the resource accordingly. [Learn more here](https://docs.google.com/presentation/d/1nC8B_S1YkTeDopGQXOqqZQ3syOtQy9bRasuQsMU-REw/edit#slide=id.p). 

## DHIS2 resources
- [Integration Concepts](https://docs.dhis2.org/master/en/implementer/html/integration.html)
- [Web API docs](https://docs.dhis2.org/2.34/en/dhis2_developer_manual/web-api.html)
- DHIS2 Play instance for testing: https://play.dhis2.org/ (UN: admin, PW: district)

## OpenFn demo dhis2 setup notes
- gcp ubuntu 16.04, 10gb
- https://dhis2.github.io/guides/dhis2-docker
