Ext.define('Chapter7Styles.view.LabelDemo', {
    extend: 'Ext.Panel',
    xtype: 'labeldemo',
    config: {
        items: [{
            xtype: 'label',
            html: 'This is a label; it can display any kind of HTML or plain text.'
        }]
    }
});

