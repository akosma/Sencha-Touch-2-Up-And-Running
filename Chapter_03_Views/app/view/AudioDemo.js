Ext.define('Chapter3Views.view.AudioDemo', {
    extend: 'Ext.Container',
    xtype: 'audiodemo',
    config: {
        items: [{
            xtype: 'label',
            html: 'Audio Demo'
        }, {
            xtype: 'audio',
            url  : 'res/audio/music.mp3'
        }]
    }
});

