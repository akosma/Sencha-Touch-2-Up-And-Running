Ext.define('Chapter10Device.profile.Tablet', {
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
            screenTitle: 'Device APIs',
            menuButtonTitle: 'APIs',
            masterView: { 
                xtype: 'indexview'
            },
            detailView: {
                xtype: 'panel',
                html: 'Select an item in the menu'
            },
            showToggleButton: true,
            collapsesMasterView: true,
            listeners: {
                masterviewshow: function (splitview) {
                    console.log('masterviewshow handler in the launch() function');
                }
            }
        });
    }
});

