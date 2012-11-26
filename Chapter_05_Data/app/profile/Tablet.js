Ext.define('Chapter5Data.profile.Tablet', {
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
            screenTitle: 'Data Demo',
            menuButtonTitle: 'Menu',
            masterView: { 
                xtype: 'indexview',
                margin: '0 1 0 0',
                flex: 1
            },
            detailView: {
                xtype: 'panel',
                html: 'Select an item in the menu'
            }
        });
    }
});

