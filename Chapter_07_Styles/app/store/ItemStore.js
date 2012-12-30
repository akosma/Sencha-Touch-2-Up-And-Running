Ext.define('Chapter7Styles.store.ItemStore', {
    extend: 'Ext.data.Store',
    xtype: 'itemstore',
    config: {
        model: 'AkoLib.model.Item',
        data: [
            { text: 'Button', screen: 'buttondemo', category: 'Components' },
            { text: 'Label', screen: 'labeldemo', category: 'Components' },
            { text: 'Segmented Button', screen: 'segmentedbuttondemo', category: 'Containers'  },
            { text: 'Tab Panel', screen: 'tabpaneldemo', category: 'Containers'  },
            { text: 'Title and Tool Bars', screen: 'titletoolbardemo', category: 'Containers'  },
            { text: 'Panel', screen: 'paneldemo', category: 'Panels'  },
            { text: 'Message Boxes', screen: 'messageboxdemo', category: 'Panels'  },
            { text: 'Sheet', screen: 'sheetdemo', category: 'Panels'  },
            { text: 'Action Sheet', screen: 'actionsheetdemo', category: 'Panels' },
            { text: 'Picker', screen: 'pickerdemo', category: 'Panels'  }
        ],
        grouper: 'category'
    }
});

