Ext.define('Chapter6Controllers.profile.Tablet', {
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
        console.log('LAUNCH from Tablet profile');

        Ext.Viewport.add({
            xtype: 'akosplitview',
            screenTitle: 'Controllers',
            menuButtonTitle: 'Demos',
            masterView: { 
                xtype: 'indexview'
            },
            detailView: {
                xtype: 'panel',
                html: 'Choose a controller sample from the menu'
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

