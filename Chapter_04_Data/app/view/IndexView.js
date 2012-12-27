Ext.define('Chapter5Data.view.IndexView', {
    extend: 'Ext.navigation.View',
    xtype: 'indexview',
    config: {
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
            itemId: 'listView',
            grouped: true,
            indexBar: true,
            store: 'PeopleStore',
            itemTpl: '<div class="contact">{firstName} <strong>{lastName}</strong></div>'
        }]
    }
});

