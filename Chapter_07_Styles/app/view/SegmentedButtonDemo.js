Ext.define('Chapter4Views.view.SegmentedButtonDemo', {
    extend: 'Ext.Panel',
    xtype: 'segmentedbuttondemo',
    config: {
        defaults: {
            margin: 20
        },
        items: [{
            xtype: 'label',
            html: 'The segmented button has a "toggle" event that can be caught when the user changes selection: (the event handler is located in the SegmentedButtonController class)'
        }, {
            xtype: 'segmentedbutton',
            items: [{
                text: 'Hue'
            }, {
                text: 'Saturation'
            }, {
                text: 'Brightness'
            }]
        }, {
            xtype: 'label',
            html: 'Multiple selection is also possible:'
        }, {
            xtype: 'segmentedbutton',
            allowMultiple: true,
            items: [{
                text: 'Red'
            }, {
                text: 'Green'
            }, {
                text: 'Blue'
            }]
        }]
    }
});


