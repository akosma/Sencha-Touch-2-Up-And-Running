Ext.define('Chapter3Views.view.TitleToolBarDemo', {
    extend: 'Ext.Container',
    xtype: 'titletoolbardemo',
    config: {
        style: 'background-color: lightgray',
        items: [{
            xtype: 'label',
            html: 'This sample shows a title bar on top and a toolbar at the bottom. (Of course, mixing navigation bars and title bars is not such a good idea.) Toolbars are similar to title bars. They can contain "spacer" objects, which, as the name implies, create proportional, flexible spaces between groups of buttons.',
            centered: true,
            margin: 20
        }, {
            xtype: 'titlebar',
            docked: 'top',
            title: 'Top',
            items: [{
                iconCls: 'action',
                iconMask: true,
                align: 'left',
                text: 'Action'
            }, {
                iconCls: 'user',
                iconMask: true,
                align: 'right',
                text: 'Profile'
            }]
        }, {
            xtype: 'toolbar',
            docked: 'bottom',
            items: [{
                iconCls: 'favorites',
                iconMask: true
            }, {
                xtype: 'spacer'
            }, {
                iconCls: 'search',
                iconMask: true
            }]
        }]
    }
});


