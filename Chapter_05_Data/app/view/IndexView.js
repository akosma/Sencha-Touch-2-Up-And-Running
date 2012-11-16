Ext.define('Chapter5Data.view.IndexView', {
    extend: 'Ext.navigation.View',
    xtype: 'indexview',
    config: {
        id: 'navigationView',
        navigationBar: {
            items: [{
                xtype: 'button',
                iconCls: 'refresh',
                iconMask: true,
                ui: 'plain',
                action: 'refresh',
                align: 'left'
            }, {
                xtype: 'segmentedbutton',
                action: 'switchformat',
                align: 'right',
                items: [{
                    text: 'JSON',
                    pressed: true
                }, {
                    text: 'XML'
                }]
            }]
        },
        items: [{
            xtype: 'list',
            id: 'listView',
            grouped: true,
            indexBar: true,
            store: {
                xtype: 'peoplestore'
            },
            itemTpl: '<div class="contact">{firstName} <strong>{lastName}</strong></div>'
        }]
    }
});

