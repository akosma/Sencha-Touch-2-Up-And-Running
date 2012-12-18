Ext.define('Chapter4Views.store.ItemStore', {
    extend: 'Ext.data.Store',
    xtype: 'itemstore',
    config: {
        model: 'AkoLib.model.Item',
        data: [
            { text: 'Button', screen: 'buttondemo', category: 'Components' },
            { text: 'Image', screen: 'imagedemo', category: 'Components' },
            { text: 'Label', screen: 'labeldemo', category: 'Components' },
            { text: 'Carousel', screen: 'carouseldemo', category: 'Containers'  },
            { text: 'Segmented Button', screen: 'segmentedbuttondemo', category: 'Containers'  },
            { text: 'Tab Panels', screen: 'tabpaneldemo', category: 'Containers'  },
            { text: 'Title Bar', screen: 'titlebardemo', category: 'Containers'  },
            { text: 'Toolbars', screen: 'toolbardemo', category: 'Containers'  },
            { text: 'Panel', screen: 'paneldemo', category: 'Panels'  },
            { text: 'Action Sheet', screen: 'actionsheetdemo', category: 'Panels' },
            { text: 'Sheets', screen: 'sheetdemo', category: 'Panels'  },
            { text: 'Message Boxes', screen: 'messageboxdemo', category: 'Panels'  },
            { text: 'Picker', screen: 'pickerdemo', category: 'Panels'  }
        ],
        grouper: 'category'
    }
});

