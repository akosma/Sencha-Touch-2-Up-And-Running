Ext.define('Chapter10Device.store.ItemStore', {
    extend: 'Ext.data.Store',
    xtype: 'itemstore',
    config: {
        storeId: 'ItemStore',
        model: 'AkoLib.model.Item',
        data: [
                { text: 'Capabilities', screen: 'capabilitiesdemo' },
                { text: 'Camera', screen: 'camerademo' },
                { text: 'Notifications', screen: 'notificationsdemo' },
                { text: 'Orientation', screen: 'orientationdemo' },
                { text: 'Network', screen: 'networkdemo' },
                { text: 'Location', screen: 'locationdemo' }
        ]
    }
});

