Ext.define('Chapter4Views.view.ImageDemo', {
    extend: 'Ext.Panel',
    xtype: 'imagedemo',
    config: {
        defaults: {
            margin: 15
        },
        layout: {
            type: 'vbox',
            align: 'center'
        },
        scrollable: true,
        items: [{
            xtype: 'label',
            html: 'The Ext.Img element allows to embed an image in a container:',
            style: 'text-align: center'
        }, {
            xtype: 'image',
            src: '/img/icons/Icon-iPad@2x.png',
            height: 144,
            width: 144
        }, {
            xtype: 'image',
            src: '/img/icons/Icon@2x.png',
            height: 114,
            width: 114
        }, {
            xtype: 'image',
            src: '/img/icons/Icon-iPad.png',
            height: 72,
            width: 72
        }, {
            xtype: 'image',
            src: '/img/icons/Icon.png',
            height: 57,
            width: 57
        }]
    }
});

