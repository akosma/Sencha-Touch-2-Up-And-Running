Ext.define('Chapter4Views.view.MapDemo', {
    extend: 'Ext.Panel',
    xtype: 'mapdemo',
    config: {
        layout: {
            type: 'card'
        },
        items: [{
            xtype: 'map',
            useCurrentLocation: true
        }]
    }
});

