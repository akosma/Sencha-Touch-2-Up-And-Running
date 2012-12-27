Ext.define('Chapter12Universal.view.IndexView', {
    extend: 'Ext.navigation.View',
    requires: ['Ext.dataview.List'],
    xtype: 'indexview',
    config: {
        items: [{
            title: 'Items',
            xtype: 'list',
            itemId: 'listView',
            store: 'ItemStore',
            itemTpl: '{text}'
        }]
    }
});

