Ext.define('Chapter10Device.store.ItemStore', {
    extend: 'Ext.data.Store',
    xtype: 'itemstore',
    config: {
        storeId: 'ItemStore',
        model: 'AkoLib.model.Item',
        data: [
                { text: 'Camera', screen: 'camerademo' },
                { text: 'Capabilities', screen: 'capabilitiesdemo' },
                //{ text: 'Contacts', screen: 'contactsdemo' },
                { text: 'Location', screen: 'locationdemo' },
                { text: 'Network', screen: 'networkdemo' },
                { text: 'Notifications', screen: 'notificationsdemo' },
                { text: 'Orientation', screen: 'orientationdemo' }
        ]
    }
});

