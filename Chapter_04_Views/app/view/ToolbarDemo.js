Ext.define('Chapter4Views.view.ToolbarDemo', {
    extend: 'Ext.Panel',
    xtype: 'toolbardemo',
    config: {
        style: 'background-color: lightgray',
        items: [{
            xtype: 'label',
            html: 'Toolbars are very similar to title bars. They can contain "spacer" objects, which as the name implies create proportional, flexible spaces between groups of buttons.',
            centered: true,
            margin: 20
        }, {
            xtype: 'toolbar',
            docked: 'top',
            items: [{
                iconCls: 'refresh',
                iconMask: true
            }, {
                iconCls: 'home',
                iconMask: true
            }, {
                iconCls: 'action',
                iconMask: true
            }, {
                xtype: 'spacer'
            }, {
                iconCls: 'user',
                iconMask: true,
                align: 'right',
                text: 'Profile'
            }, {
                iconCls: 'download',
                iconMask: true
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


