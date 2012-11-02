Ext.define('Chapter12Universal.view.IndexView', {
    extend: 'Ext.dataview.NestedList',
    xtype: 'indexview',
    config: {
        id: 'indexView',
        store: {
            xtype: 'itemstore'
        },
        title: 'Items'
    }
});

