Ext.define('Chapter5LocalStorage.view.IndexView', {
    extend: 'Ext.navigation.View',
    xtype: 'indexview',
    config: {
        id: 'navigationView',
        navigationBar: {
            items: [{
                xtype: 'button',
                iconCls: 'add',
                iconMask: true,
                ui: 'plain',
                action: 'add',
                align: 'right'
            }, {
                xtype: 'button',
                text: 'Save',
                action: 'save',
                align: 'right',
                hidden: true
            }]
        },
        items: [{
            xtype: 'list',
            id: 'listView',
            emptyText: '<p class="instructions">No people here yet.<br>Tap the "+" button to create one.</p>',
            store: {
                xtype: 'peoplestore'
            },
            itemTpl: '<div class="contact">{firstName} <strong>{lastName}</strong></div>'
        }]
    }
});

