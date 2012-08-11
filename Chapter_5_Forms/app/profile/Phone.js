Ext.define('Chapter5Forms.profile.Phone', {
    extend: 'Ext.app.Profile',
    config: {
        name: 'Phone',
        models: [],
        views: ['FormSample'],
        controllers: []
    },
    isActive: function () {
        return Ext.os.is.Phone;
    },
    launch: function () {
        Ext.Viewport.add({
            xtype: 'formsample'
        });
    }
});

