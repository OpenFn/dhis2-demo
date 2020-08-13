//Job for uploading Events to DHIS2 based on CommCare data 
event(
  fields(
    field("program", "GaOaL76FraA"),
    field("orgUnit", dataValue("userLocationOrgUnitID")),
    field("eventDate", function(state) {
      // Here we only take the first 10 digits of CommCare's "date_closed" string.
      return state.data.date_closed.substring(0, 10);
    }),
    field("status", "COMPLETED"),
    field("storedBy", "AF-commcare-interface"),
    field("dataValues", function(state) {

      const converter = function(x) {
        return ( x == 1 ? 'TRUE' : 'FALSE' )
      };

      return [
                dataElement("wiiDcsQ5pdQ", dataValue("ageInMonths"))(state),
                dataElement("RsZ4gQzWPWU", dataValue("childGender"))(state),
                dataElement("L7aO70bcrbP", dataValue("childWeight"))(state),
                dataElement("x1708y0C4C7", converter(dataValue("feverFlag")))(state),
                dataElement("ft7ak69zrDz", dataValue("verySevereDiseaseFlag"))(state),
                dataElement("mxNluxv7LWg", dataValue("oedemaFlag"))(state),
                dataElement("hs3Wugcy4mt", dataValue("MUACFlag"))(state),
                dataElement("st4eFzN160J", dataValue("suspectedMalnutritionFlag"))(state),
                dataElement("BExzTTmDhvO", dataValue("noMalnutritionFlag"))(state),
                dataElement("sI5nJKbDXxk", dataValue("moderateAcuteMalnutritionFlag"))(state),
                dataElement("wvIZHqXsAFX", dataValue("severeAcuteMalnutritionWithoutComplicationFlag"))(state),
                dataElement("ySqC9RnGQxD", dataValue("severeAcuteMalnutritionWithComplicationFlag"))(state),
                dataElement("XZndbQxziZO", dataValue("dewormingFlag"))(state),
                dataElement("tqw5aWxCR1x", dataValue("vitaminAFlag"))(state),
                dataElement("gY6pXRwdThm", dataValue("childHeightFlag"))(state),
                dataElement("xOTL8X1B2NI", dataValue("pallorFlag"))(state),
                dataElement("Th4EvYXGSwl", dataValue("severePallorFlag"))(state),
                dataElement("AgOM6kruN1l", dataValue("skinProblemFlag"))(state),
                dataElement("aNX57WE3vsR", dataValue("severeSoftTissueInfectionFlag"))(state),
                dataElement("ecFkzcELtvw", dataValue("erysipelasCellulitisFlag"))(state),
                dataElement("G1xXtYgeuXN", dataValue("impetigoFlag"))(state),
                dataElement("gtjeeziwAN1", dataValue("chickenPoxFlag"))(state),
                dataElement("XMcaHg9Ies9", dataValue("herpesFlag"))(state),
                dataElement("iYUhvrRnJdu", dataValue("tineaCorporisFlag"))(state),
                dataElement("Tb7X9FovXsq", dataValue("leishmaniosisFlag"))(state),
                dataElement("dja6mCss9o5", dataValue("scabiesFlag"))(state),
                dataElement("W7dYso6f6c0", dataValue("urticariaFlag"))(state),
                dataElement("jwENukN7x8T", dataValue("mycosisFlag"))(state),
                dataElement("v1OnAv6a6GF", dataValue("tineaCapitisFlag"))(state),
                dataElement("VdcYjT8H2DM", dataValue("pityriasisVersicolorFlag"))(state),
                dataElement("C7MRXB8rZrR", dataValue("shinglesFlag"))(state),
                dataElement("ysNDpMshWu2", dataValue("feverMore7DaysFlag"))(state),
                dataElement("ptHiIxoWT2j", dataValue("persistentCoughOrRecurrentWheezingFlag"))(state),
                dataElement("WjNYqG8zi5V", dataValue("severePneumoniaOrVerySevereDiseaseFlag"))(state),
                dataElement("vMj9NZYibkx", dataValue("resistantWheezingFlag"))(state),
                dataElement("AupNCEGaCPe", dataValue("wheezingEpisodeFlag"))(state),
                dataElement("jmaPh46qxZL", dataValue("pneumoniaFlag"))(state),
                dataElement("mTrykBBMfJL", dataValue("upperRespiratoryTractInfectionFlag"))(state),
                dataElement("nspzFe4axmI", dataValue("diarrhoeaMore14daysFlag"))(state),
                dataElement("edsDrLAzx95", dataValue("acuteDiarrhoeaWithSevereDehydrationFlag"))(state),
                dataElement("SX3UyVIhAZP", dataValue("acuteDiarrhoeaWithSomeDehydrationFlag"))(state),
                dataElement("bQWZtGOdn6z", dataValue("acuteDiarrhoeaWithoutDehydrationFlag"))(state),
                dataElement("v0zEE7m2SnT", dataValue("severePersistentDiarrhoeaFlag"))(state),
                dataElement("Gcua1eaZ5eC", dataValue("persistentDiarrhoeaFlag"))(state),
                dataElement("ly5sMjri6n7", dataValue("dysentryFlag"))(state),
                dataElement("EHgO0awHKbi", dataValue("earDischargeFlag"))(state),
                dataElement("jNsPe6yzhCQ", dataValue("earDischargeMore14DaysFlag"))(state),
                dataElement("HOfe9Ms2IDM", dataValue("earPainFlag"))(state),
                dataElement("x0SXj91wkBn", dataValue("mastoiditisFlag"))(state),
                dataElement("Dv5Q4FmyvyM", dataValue("chronicEarInfectionFlag"))(state),
                dataElement("X6rGUdpEDvu", dataValue("acuteEarInfectionWithDischargeFlag"))(state),
                dataElement("oGI31eqZSco", dataValue("acuteEarInfectionToTreatFlag"))(state),
                dataElement("fEaArIqBPZC", dataValue("acuteEarInfectionToObserveFlag"))(state),
                dataElement("s0XGHZwjuJg", dataValue("noEarInfectionFlag"))(state),
                dataElement("kATEiT6rXkJ", dataValue("measlesFlag"))(state),
                dataElement("ftxiAWBUm8c", dataValue("severeComplicatedMeaslesFlag"))(state),
                dataElement("qGDJu8GwiT1", dataValue("measlesWithEyeOrMouthComplicationsFlag"))(state),
                dataElement("UBDoldBMVye", dataValue("throatAbcessFlag"))(state),
                dataElement("nHj5WxX3l5S", dataValue("viralSoreThroatFlag"))(state),
                dataElement("eO7S1y8j1Fm", dataValue("possibleStreptococcalFlag"))(state),
                dataElement("kSiLELpYZ9b", dataValue("streptococcalSoreThroatFlag"))(state),
                dataElement("BANh6Or7fvh", dataValue("dysuriaFlag"))(state),
                dataElement("TI5gfvKKbRn", dataValue("urinaryTractInfectionFlag"))(state),
                dataElement("CP8hPKwB6rX", dataValue("typhoidFeverFlag"))(state),
                dataElement("thMD3ag9aH0", dataValue("possibleTyphoidFeverFlag"))(state),
                dataElement("PRJOvVptMy1", dataValue("highRiskRegionFlag"))(state),
                dataElement("qlbEESFzuM0", dataValue("malariaRapidTestAvailableFlag"))(state),
                dataElement("Y64yUy6zBEp", dataValue("malariaFlag"))(state),
                dataElement("eE4UpNHJQMY", dataValue("urgentReferralFlag"))(state)
      ]
    })
  )
);
