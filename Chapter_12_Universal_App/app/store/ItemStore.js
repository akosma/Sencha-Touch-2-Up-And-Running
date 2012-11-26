Ext.define('Chapter12Universal.store.ItemStore', {
    extend: 'Ext.data.Store',
    xtype: 'itemstore',
    config: {
        storeId: 'ItemStore',
        model: 'AkoLib.model.Item',
        data: [
                { text: 'First item', screen: 'firstitem' },
                { text: 'Second item', screen: 'seconditem' },
                { text: 'Third item', screen: 'thirditem' }
        ]
    }
});

