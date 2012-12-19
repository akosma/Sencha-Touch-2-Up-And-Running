Ext.define('Chapter4Views.view.TitleBarDemo', {
    extend: 'Ext.Panel',
    xtype: 'titlebardemo',
    config: {
        items: [{
            xtype: 'label',
            html: 'This sample shows a title bar on top, and another at the bottom (of course, mixing navigation bars and title bars is not such a good idea ;)',
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
            xtype: 'titlebar',
            docked: 'bottom',
            title: 'Bottom',
            items: [{
                iconCls: 'favorites',
                iconMask: true,
                align: 'left'
            }, {
                iconCls: 'search',
                iconMask: true,
                align: 'right'
            }]
        }]
    }
});


