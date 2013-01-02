Ext.define('Chapter3Views.view.VideoDemo', {
    extend: 'Ext.Container',
    xtype: 'videodemo',
    config: {
        items: [{
            xtype: 'video',
            itemId: 'videoComponent',
            url  : 'res/video/iphone.m4v',
            posterUrl: 'res/video/jerome.png'
        }]
    }
});

