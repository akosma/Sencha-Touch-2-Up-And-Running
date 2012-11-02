Ext.define('Chapter12Universal.view.tablet.RootView', {
    extend: 'Ext.Container',
    xtype: 'rootview',
    config: {
        id: 'rootView',
        layout: 'hbox',
        items: [{ 
            xtype: 'indexview',
            flex: 1
        }, { 
            id: 'mainPane',
            xtype: 'container',
            layout: 'card',
            flex: 3,
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

