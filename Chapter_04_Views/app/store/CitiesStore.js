Ext.define('Chapter4Views.store.CitiesStore', {
    extend: 'Ext.data.Store',
    config: {
        fields: [{ 
            name: 'name', type: 'string'
        }, { 
            name: 'latitude', type: 'float'
        }, { 
            name: 'longitude', type: 'float'
        }],
        storeId: 'citiesStore',
        // Data borrowed from
        // http://www.timegenie.com/latitude_and_longitude/country_coordinates/ch
        data: [{
            name: 'Aarau', latitude: 47.3833, longitude: 8.05
        }, {
            name: 'Baden', latitude: 47.4667, longitude: 8.3
        }, {
            name: 'Basel', latitude: 47.55, longitude: 7.58333
        }, {
            name: 'Bern', latitude: 46.9167, longitude: 7.5
        }, {
            name: 'Biel/Bienne', latitude: 47.1333, longitude: 7.25
        }, {
            name: 'Chur', latitude: 46.85, longitude: 9.53333
        }, {
            name: 'Fribourg', latitude: 46.8, longitude: 7.15
        }, {
            name: 'Geneva', latitude: 46.25, longitude: 6.13333
        }, {
            name: 'La Chaux-de-Fonds', latitude: 47.1, longitude: 6.83333
        }, {
            name: 'Lausanne', latitude: 46.55, longitude: 6.61667
        }, {
            name: 'Locarno', latitude: 46.1667, longitude: 8.8
        }, {
            name: 'Lucerne', latitude: 47.05, longitude: 8.3
        }, {
            name: 'Lugano', latitude: 46, longitude: 8.96667
        }, {
            name: 'Neuchâtel', latitude: 47, longitude: 6.95
        }, {
            name: 'Sankt Gallen', latitude: 47.4833, longitude: 9.55
        }, {
            name: 'Schaffhausen', latitude: 47.7, longitude: 8.63333
        }, {
            name: 'Sierre', latitude: 46.3, longitude: 7.53333
        }, {
            name: 'Sion', latitude: 46.2167, longitude: 7.33333
        }, {
            name: 'Solothurn', latitude: 47.2167, longitude: 7.53333
        }, {
            name: 'Winterthur', latitude: 47.5, longitude: 8.71667
        }, {
            name: 'Zurich', latitude: 47.4833, longitude: 8.53333
        }]
    }
});

