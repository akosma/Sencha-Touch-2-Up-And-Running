Ext.define('Chapter5Forms.profile.Default', {
    extend: 'Ext.app.Profile',
    isActive: function () {
        return Ext.os.is.Desktop;
    },
    launch: function () {
        Ext.Viewport.add({
            xtype: 'panel',
            html: 'Content not available on this device; please use a phone or a simulator to see this sample'
        });
    }
});


