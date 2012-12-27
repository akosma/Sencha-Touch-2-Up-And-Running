Ext.define('Chapter4Views.view.VerticalCarouselDemo', {
    extend: 'Ext.Panel',
    xtype: 'vcarouseldemo',
    config: {
        layout: {
            type: 'card'
        },
        items: [{
            xtype: 'carousel',
            fullscreen: true,
            direction: 'vertical',
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

