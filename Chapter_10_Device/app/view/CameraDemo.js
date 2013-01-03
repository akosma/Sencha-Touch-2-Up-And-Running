Ext.define('Chapter10Device.view.CameraDemo', {
    extend: 'Ext.Container',
    xtype: 'camerademo',
    config: {
        defaults: {
            margin: 10
        },
        items: [{
            xtype: 'button',
            text: 'Load from Camera',
            action: 'loadCamera'
        }, {
            xtype: 'button',
            text: 'Load from Library',
            action: 'loadLibrary'
        }, {
            xtype: 'image',
            itemId: 'selectedImage',
            src: 'resources/icons/Icon~ipad@2x.png',
            height: 144,
            width: 144
        }]
    }
});

