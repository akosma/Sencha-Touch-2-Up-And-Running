Ext.define('TemplateApp.profile.Desktop', {
    extend: 'Ext.app.Profile',
    config: {
        name: 'Desktop'
    },
    isActive: function () {
        return Ext.os.is.Desktop;
    },
    launch: function () {
        Ext.Viewport.add({
            xtype: 'panel',
            html: 'Hello World on Desktop!',
            items: [{
                xtype: 'toolbar',
                docked: 'bottom',
                items: [{
                    xtype: 'button',
                    text: 'Test',
                    listeners: {
                        tap: function() {
                            Ext.Msg.alert('Test on Desktop');
                        }
                    }
                }]
            }]
        });
    }
});

