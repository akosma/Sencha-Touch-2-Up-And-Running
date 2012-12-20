Ext.define('Chapter4Views.store.ItemStore', {
    extend: 'Ext.data.Store',
    xtype: 'itemstore',
    config: {
        model: 'AkoLib.model.Item',
        data: [
            { text: 'Button', screen: 'buttondemo', category: 'Components' },
            { text: 'Image', screen: 'imagedemo', category: 'Components' },
            { text: 'Label', screen: 'labeldemo', category: 'Components' },
            { text: 'Horizontal Carousel', screen: 'hcarouseldemo', category: 'Containers'  },
            { text: 'Vertical Carousel', screen: 'vcarouseldemo', category: 'Containers'  },
            { text: 'Segmented Button', screen: 'segmentedbuttondemo', category: 'Containers'  },
            { text: 'Tab Panel', screen: 'tabpaneldemo', category: 'Containers'  },
            { text: 'Title Bar', screen: 'titlebardemo', category: 'Containers'  },
            { text: 'Toolbar', screen: 'toolbardemo', category: 'Containers'  },
            { text: 'Panel', screen: 'paneldemo', category: 'Panels'  },
            { text: 'Message Boxes', screen: 'messageboxdemo', category: 'Panels'  },
            { text: 'Sheet', screen: 'sheetdemo', category: 'Panels'  },
            { text: 'Action Sheet', screen: 'actionsheetdemo', category: 'Panels' },
            { text: 'Picker', screen: 'pickerdemo', category: 'Panels'  },
            { text: 'Maps', screen: 'mapdemo', category: 'Multimedia' },
            { text: 'Audio', screen: 'audiodemo', category: 'Multimedia' },
            { text: 'Video', screen: 'videodemo', category: 'Multimedia' },
            { text: 'Charts', screen: 'chartsdemo', category: 'Multimedia' }
        ],
        grouper: 'category'
    }
});

