app.service('CountryProperties', function () {
    var countryCode;
    var countryPopulation;
    var area;
    var capital;
    var geoNameId;
    var countryFlag;
    var mapImage;

    return {
        getCountryCode: function () {
            return countryCode;
        },
        setCountryCode: function(value) {
            countryCode = value;
        },
        getCountryPopulation: function () {
            return countryPopulation;
        },
        setCountryPopulation: function(value) {
            countryPopulation = value;
        },
        getArea: function () {
            return area;
        },
        setArea: function(value) {
            area = value;
        },
        getCapital: function () {
            return capital;
        },
        setCapital: function(value) {
            capital = value;
        },
        getGeoNameId: function() {
            return geoNameId;
        },
        setGeoNameId: function(value) {
            geoNameId = value;
        },
        getCountryFlag: function() {
            return countryFlag;
        },
        setCountryFlag: function(value) {
            countryFlag = "http://www.geonames.org/flags/x/" + value.toLowerCase() + ".gif";
        },
        getMapImage: function() {
            return mapImage;
        },
        setMapImage: function(value) {
            mapImage = "http://www.geonames.org/img/country/250/" + value + ".png";
        }
    };
});