Ext.define('Chapter5LocalStorage.profile.Tablet', {
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
            screenTitle: 'JSON & XML Data Browser',
            menuButtonTitle: 'Menu',
            masterView: { 
                xtype: 'indexview'
            },
            detailView: {
                xtype: 'panel',
                html: 'Choose a demo from the menu'
            },
            detailToolbarButtons: [{
                xtype: 'spacer'
            }, {
                xtype: 'button',
                text: 'Save',
                action: 'saveTablet',
                hidden: true
            }],
            showToggleButton: true,
            collapsesMasterView: true
        });
    }
});

