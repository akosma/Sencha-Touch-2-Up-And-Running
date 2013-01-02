Ext.define('Chapter3Views.view.LabelDemo', {
    extend: 'Ext.Container',
    xtype: 'labeldemo',
    config: {
        items: [{
            xtype: 'label',
            html: 'This is a label; it can display any kind of HTML or plain text.'
        }]
    }
});

