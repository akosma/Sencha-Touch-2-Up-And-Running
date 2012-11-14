Ext.define('Chapter5Data.view.tablet.RootView', {
    extend: 'Ext.Container',
    xtype: 'rootview',
    config: {
        id: 'rootView',
        layout: 'hbox',
        items: [{ 
            margin: '0 1 0 0',
            xtype: 'indexview',
            flex: 1
        }, { 
            margin: '0 0 0 1',
            id: 'mainPane',
            xtype: 'container',
            layout: 'card',
            flex: 2,
            items: [{
                id: 'titleToolbar',
                title: 'Universal App',
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Menu',
                    action: 'showMenu'
                }]
            }, {
                xtype: 'panel',
                html: 'Choose an item from the menu'
            }]
        }]
    }
});

