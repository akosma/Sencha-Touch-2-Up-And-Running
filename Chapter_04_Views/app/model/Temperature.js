Ext.define('Chapter4Views.model.Temperature', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            name: 'time', type: 'datetime', mapping: 'dt', convert: function(value, record) {
                return new Date(value * 1000);
            }
        }, {
            name: 'temperature', type: 'float', mapping: 'temp.v', convert: function (value, record) {
                return value - 273;
            }
        }]
    }
});

