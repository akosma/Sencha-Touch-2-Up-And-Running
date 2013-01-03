Ext.define('Chapter10Profiles.profile.Phone', {
    extend: 'Ext.app.Profile',
    config: {
        name: 'SamplePhone',
        models: [],
        views: ['PhoneView'],
        controllers: []
    },
    isActive: function () {
        return Ext.os.is.Phone;
    },
    launch: function () {
        Ext.Viewport.add({
            xtype: 'phoneview'
        });
    }
});

