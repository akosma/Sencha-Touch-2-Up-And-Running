Ext.define('Chapter5DataViews.view.IndexView', {
    extend: 'Ext.navigation.View',
    xtype: 'indexview',
    config: {
        id: 'navigationView',
        items: [{
            title: 'Data Views',
            xtype: 'list',
            id: 'listView',
            store: 'ItemStore',
            itemTpl: '{text}'
        }]
    }
});

