Ext.define('Chapter12Universal.profile.Tablet', {
    extend: 'Ext.app.Profile',
    config: {
        name: 'Tablet',
        models: [],
        views: ['AkoLib.view.SplitView'],
        controllers: ['TabletController']
    },
    isActive: function () {
        return Ext.os.is.Tablet || Ext.os.is.Desktop;
    },
    launch: function () {
        Ext.Viewport.add({
            xtype: 'akosplitview',
            screenTitle: 'Universal App',
            menuButtonTitle: 'Menu',
            masterView: { 
                xtype: 'indexview'
            },
            detailView: {
                xtype: 'panel',
                html: 'Select an item in the menu'
            }
        });
    }
});

