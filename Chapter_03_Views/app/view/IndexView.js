Ext.define('Chapter4Views.view.IndexView', {
    extend: 'Ext.navigation.View',
    xtype: 'indexview',
    config: {
        items: [{
            title: 'Views',
            xtype: 'list',
            itemId: 'listView',
            store: 'ItemStore',
            itemTpl: '{text}',
            grouped: true
        }]
    }
});

