Ext.define('Chapter4Views.store.ItemStore', {
    extend: 'Ext.data.TreeStore',
    xtype: 'itemstore',
    config: {
        model: 'Chapter4Views.model.Item',
        defaultRootProperty: 'items',
        data: {
            items: [
                { text: 'Action Sheet', screen: 'actionsheetdemo', leaf: true },
                { text: 'Button', screen: 'buttondemo', leaf: true },
                { text: 'Carousel', screen: 'carouseldemo', leaf: true },
                { text: 'Image', screen: 'imagedemo', leaf: true },
                { text: 'Label', screen: 'labeldemo', leaf: true },
                { text: 'Message Boxes', screen: 'messageboxdemo', leaf: true },
                { text: 'Panel', screen: 'paneldemo', leaf: true },
                { text: 'Picker', screen: 'pickerdemo', leaf: true },
                { text: 'Segmented Button', screen: 'segmentedbuttondemo', leaf: true },
                { text: 'Sheets', screen: 'sheetdemo', leaf: true },
                { text: 'Tab Panels', screen: 'tabpaneldemo', leaf: true },
                { text: 'Title Bar', screen: 'titlebardemo', leaf: true },
                { text: 'Toolbars', screen: 'toolbardemo', leaf: true }
            ]
        }
    }
});

