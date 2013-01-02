Ext.define('Chapter3Views.view.HorizontalCarouselDemo', {
    extend: 'Ext.Container',
    xtype: 'hcarouseldemo',
    config: {
        layout: {
            type: 'card'
        },
        items: [{
            xtype: 'carousel',
            fullscreen: true,
            items: [{
                html: 'Red',
                style: 'background-color: red'
            }, {
                html: 'Yellow',
                style: 'background-color: yellow'
            }, {
                html: 'Green',
                style: 'background-color: green'
            }]
        }]
    }
});

