if (!window.Ext) {
    alert('Sencha Touch could not be loaded - please check the paths in the index.html file.');
}

Ext.application({
    name: 'Chapter5Forms',
    appFolder: 'app',
    profiles: ['Phone', 'Tablet'],

    icon: {
        57: '../img/Icon.png',
        72: '../img/Icon-iPad.png',
        114: '../img/Icon@2x.png',     // Retina iPhone
        144: '../img/Icon-iPad@2x.png' // Retina iPad
    },

    // http://www.sencha.com/forum/showthread.php?199382-phoneStartupScreen-doesn-t-work
    startupImage: {
        '320x460': '../img/Default.png',
        '640x920': '../img/Default@2x.png', // Retina iPhone
        '640x1096': '../img/Default-568@2x.png', // Retina 4-inch iPhone
        '768x1004': '../img/Default-Portrait.png',
        '748x1024': '../img/Default-Landscape.png',
        '1536x2008': '../img/Default-Portrait@2x.png', // Retina iPad, Portrait
        '1496x2048': '../img/Default-Landscape@2x.png' // Retina iPad, Landscape
    },

    models: ['Sample'],
    views: ['RadioButtonSample', 'CheckboxSample', 'TextFieldSample', 'SliderToggleSample', 'IndexView'],
    controllers: [],
    stores: ['SampleStore'],

    isIconPrecomposed: true,
    statusBarStyle: 'black', // can also be 'default'

    launch: function () {}
});

