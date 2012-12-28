Ext.define('Chapter6Controllers.profile.Phone', {
    extend: 'Ext.app.Profile',
    config: {
        name: 'Phone',
        models: [],
        views: [],
        controllers: ['PhoneController']
    },
    isActive: function () {
        return Ext.os.is.Phone;
    },
    launch: function () {
        console.log('LAUNCH from Phone profile');

        Ext.Viewport.add({
            xtype: 'indexview'
        });
    }
});

