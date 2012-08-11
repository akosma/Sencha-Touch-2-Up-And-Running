Ext.define('TemplateApp.profile.Default', {
    extend: 'Ext.app.Profile',
    isActive: function () {
        return Ext.os.is.Desktop || Ext.os.is.Tablet || Ext.os.is.Phone;
    },
    launch: function () {
        Ext.Viewport.add({
            xtype: 'panel',
            html: 'Content not available on this device'
        });
    }
});

