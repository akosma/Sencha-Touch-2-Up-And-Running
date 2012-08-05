Ext.define('TemplateApp.profile.Phone', {
    extend: 'Ext.app.Profile',
    config: {
        name: 'Phone',
        models: [],
        views: [],
        controllers: []
    },
    isActive: function () {
        return Ext.os.is.Phone;
    },
    launch: function () {
        Ext.Viewport.add({
            xtype: 'panel',
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
        });
    }
});

