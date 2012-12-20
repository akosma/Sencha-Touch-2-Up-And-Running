Ext.define('Chapter4Views.view.VideoDemo', {
    extend: 'Ext.Panel',
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

