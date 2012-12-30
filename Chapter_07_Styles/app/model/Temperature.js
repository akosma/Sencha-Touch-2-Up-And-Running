Ext.define('Chapter7Styles.model.Temperature', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            name: 'time', type: 'datetime', mapping: 'dt', convert: function(value, record) {
                return new Date(value * 1000);
            }
        }, {
            name: 'temperature', type: 'float', mapping: 'temp.v', convert: function (value, record) {
                // The temperatures are returned in Kelvin, but we want to
                // display them in Celsius.
                return value - 273.15;
            }
        }]
    }
});

