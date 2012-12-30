if (!window.Ext) {
    alert('Sencha Touch could not be loaded - please check the paths in the index.html file.');
}

Ext.Loader.setConfig({
    paths: {
        'AkoLib': '../AkoLib'
    }
});

Ext.application({
    name: 'Chapter4Views',
    appFolder: 'app',
    profiles: ['Phone', 'Tablet'],
    requires: ['Ext.tab.Panel', 'Ext.picker.Picker'],

    icon: {
        57: '../img/icons/Icon.png',
        72: '../img/icons/Icon-iPad.png',
        114: '../img/icons/Icon@2x.png',     // Retina iPhone
        144: '../img/icons/Icon-iPad@2x.png' // Retina iPad
    },

    // http://www.sencha.com/forum/showthread.php?199382-phoneStartupScreen-doesn-t-work
    startupImage: {
        '320x460': '../img/loading/Default.png',
        '640x920': '../img/loading/Default@2x.png', // Retina iPhone
        '640x1096': '../img/loading/Default-568@2x.png', // Retina 4-inch iPhone
        '768x1004': '../img/loading/Default-Portrait.png',
        '748x1024': '../img/loading/Default-Landscape.png',
        '1536x2008': '../img/loading/Default-Portrait@2x.png', // Retina iPad, Portrait
        '1496x2048': '../img/loading/Default-Landscape@2x.png' // Retina iPad, Landscape
    },

    models: ['AkoLib.model.Item', 'Temperature'],
    views: ['ActionSheetDemo', 'ButtonDemo', 'ImageDemo', 'LabelDemo',
            'MessageBoxDemo', 'PanelDemo', 'PickerDemo', 'SegmentedButtonDemo', 'SheetDemo',
            'TabPanelDemo', 'TitleToolBarDemo', 'IndexView'],
    controllers: ['ButtonController', 'SegmentedButtonController', 'TabPanelController'],
    stores: ['ItemStore', 'CitiesStore', 'TemperatureStore'],

    isIconPrecomposed: true,
    statusBarStyle: 'black', // can also be 'default'

    launch: function () {}
});

