Ext.define('Chapter10Device.view.CapabilitiesDemo', {
    extend: 'Ext.Container',
    xtype: 'capabilitiesdemo',
    config: {
        scrollable: true
    },
    initialize: function () {
        this.callParent(arguments);
        var key = null;
        var output = [];
        var value = false;
        var text = '';
        console.log('Available features:');
        for (key in Ext.feature.has) {
            value = Ext.feature.has[key];
            text = key + ': ' + value;
            console.log(text);
            output.push(text);
        }
        this.setHtml('Available features:<br><br>' + output.join('<br>'));
    }
});

