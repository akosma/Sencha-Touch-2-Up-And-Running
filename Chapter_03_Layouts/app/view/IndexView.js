Ext.define('Chapter3Layouts.view.IndexView', {
    extend: 'Ext.navigation.View',
    xtype: 'indexview',
    config: {
        items: [{
            title: 'Views',
            xtype: 'list',
            itemId: 'listView',
            store: 'ItemStore',
            itemTpl: '{text}'
        }]
    }
});

