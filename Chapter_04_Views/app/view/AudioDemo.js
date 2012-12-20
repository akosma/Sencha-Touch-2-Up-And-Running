Ext.define('Chapter4Views.view.AudioDemo', {
    extend: 'Ext.Panel',
    xtype: 'audiodemo',
    config: {
        items: [{
            xtype: 'label',
            html: 'Audio Demo'
        }, {
            xtype: 'audio',
            url  : '/_libs/sencha/examples/audio/crash.mp3'
        }]
    }
});

