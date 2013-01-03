Ext.define('Chapter10Profiles.view.samplephone.PhoneView', {
    extend: 'Ext.Container',
    xtype: 'phoneview',
    config: {
        html: 'Hello World on Phone!',
        items: [{
            xtype: 'toolbar',
            docked: 'bottom',
            items: [{
                xtype: 'button',
                text: 'Test',
                listeners: {
                    tap: function() {
                        Ext.Msg.alert('Test on Phone');
                    }
                }
            }]
        }]
    }
});

