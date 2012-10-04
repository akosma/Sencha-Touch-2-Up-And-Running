Ext.define('Chapter5Forms.profile.Tablet', {
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
            xtype: 'formsample'
        });
    }
});

