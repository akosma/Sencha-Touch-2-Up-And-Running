Ext.define('Chapter4LocalStorage.view.IndexView', {
    extend: 'Ext.navigation.View',
    xtype: 'indexview',
    config: {
        itemId: 'indexView',
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
            itemId: 'listView',
            emptyText: '<p class="instructions">No people here yet.<br>Tap the "+" button to create one.</p>',
            store: 'PeopleStore',
            itemTpl: '<div class="contact">{firstName} <strong>{lastName}</strong></div>'
        }]
    }
});

