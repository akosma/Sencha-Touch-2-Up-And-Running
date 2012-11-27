Ext.define('Chapter5DataViews.store.ItemStore', {
    extend: 'Ext.data.Store',
    xtype: 'itemstore',
    config: {
        storeId: 'ItemStore',
        model: 'AkoLib.model.Item',
        data: [
            { text: 'DataView', screen: 'dataviewdemo' },
            { text: 'List', screen: 'listdemo' },
            { text: 'NestedList', screen: 'nestedlistdemo' }
        ]
    }
});

