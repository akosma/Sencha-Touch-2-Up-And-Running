Ext.define('Chapter3Layouts.store.ItemStore', {
    extend: 'Ext.data.Store',
    xtype: 'itemstore',
    config: {
        model: 'AkoLib.model.Item',
        data: [
            { text: 'Card Layout', screen: 'carddemo' },
            { text: 'Fit Layout', screen: 'fitdemo' },
            { text: 'Docking', screen: 'dockingdemo' },
            { text: 'HBox Layout', screen: 'hboxdemo' },
            { text: 'VBox Layout', screen: 'vboxdemo' }
        ]
    }
});

