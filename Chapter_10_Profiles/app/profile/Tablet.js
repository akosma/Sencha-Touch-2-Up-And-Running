Ext.define('TemplateApp.profile.Tablet', {
    extend: 'Ext.app.Profile',
    config: {
        name: 'Tablet',
        models: [],
        views: [],
        controllers: []
    },
    isActive: function () {
        return Ext.os.is.Tablet;
    },
    launch: function () {
        Ext.Viewport.add({
            xtype: 'panel',
            html: 'Hello World on Tablet!',
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Test',
                    listeners: {
                        tap: function() {
                            Ext.Msg.alert('Test on Tablet');
                        }
                    }
                }]
            }]
        });
    }
});

