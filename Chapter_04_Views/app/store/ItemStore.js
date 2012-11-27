Ext.define('Chapter4Views.store.ItemStore', {
    extend: 'Ext.data.Store',
    xtype: 'itemstore',
    config: {
        model: 'AkoLib.model.Item',
        data: [
            { text: 'Action Sheet', screen: 'actionsheetdemo' },
            { text: 'Button', screen: 'buttondemo' },
            { text: 'Carousel', screen: 'carouseldemo' },
            { text: 'Image', screen: 'imagedemo' },
            { text: 'Label', screen: 'labeldemo' },
            { text: 'Message Boxes', screen: 'messageboxdemo' },
            { text: 'Panel', screen: 'paneldemo' },
            { text: 'Picker', screen: 'pickerdemo' },
            { text: 'Segmented Button', screen: 'segmentedbuttondemo' },
            { text: 'Sheets', screen: 'sheetdemo' },
            { text: 'Tab Panels', screen: 'tabpaneldemo' },
            { text: 'Title Bar', screen: 'titlebardemo' },
            { text: 'Toolbars', screen: 'toolbardemo' }
        ]
    }
});

