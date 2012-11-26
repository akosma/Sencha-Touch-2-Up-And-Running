Ext.define('Chapter12Universal.view.IndexView', {
    extend: 'Ext.navigation.View',
    xtype: 'indexview',
    config: {
        title: 'Items',
        items: [{
            xtype: 'list',
            itemId: 'listView',
            store: 'ItemStore',
            itemTpl: '{text}'
        }]
    }
});

