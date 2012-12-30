Ext.define('Chapter7Styles.store.TemperatureStore', {
    extend: 'Ext.data.Store',
    xtype: 'temperaturestore',
    config: {
        model: 'Chapter7Styles.model.Temperature',
        sorters: [{
            property: 'time',
            direction: 'ASC'
        }],
        autoLoad: true,
        storeId: 'TemperatureStore',
        proxy: {
            type: 'jsonp',
            // This brings the temperatures for Bern, Switzerland for the past
            // month
            url: 'http://openweathermap.org/data/2.1/history/station/6013?type=day',
            reader: {
                type: 'json',
                rootProperty: 'list'
            }
        }
    }
});

