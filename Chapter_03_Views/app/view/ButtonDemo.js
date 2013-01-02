Ext.define('Chapter3Views.view.ButtonDemo', {
    extend: 'Ext.Container',
    xtype: 'buttondemo',
    config: {
        scrollable: true,
        defaults: {
            xtype: 'button'
        },
        layout: {
            type: 'vbox',
            align: 'left'
        },
        items: [{
            xtype: 'label',
            html: 'Buttons can have badges:'
        }, {
            text: 'Unread',
            badgeText: '42',
            margin: '5 5 5 30'
        }, {
            xtype: 'label',
            html: 'Complex button example:'
        },{
            xtype: 'button',
            text: 'Reply',
            badgeText: '42',
            ui: 'normal',
            iconCls: 'reply',
            iconMask: true,
            iconAlign: 'top',
            margin: '5 5 5 30',
            listeners: {
                tap: function (button, e, eOpts) {
                    console.log('button tap');
                }    
            }
        }]
    },

    initialize: function (component, eOpts) {
        // Add a button for each UI type
        this.add({
            xtype: 'label',
            html: 'Different types of UIs:'
        });
        var uis = ['action', 'back', 'confirm', 'decline', 
            'forward', 'normal', 'plain', 'round'];
        Ext.Array.each(uis, function (ui) {
            this.add({
                ui: ui,
                text: ui,
                margin: '5 5 5 30'
            });
        }, this);

        // Add a button for each icon type
        this.add({
            xtype: 'label',
            html: 'Different types of icons: (remember to set "iconMask: true" for the icons to appear!)'
        });
        var icons = ['action', 'add', 'arrow_down', 'arrow_left', 'arrow_right', 
            'arrow_up', 'bookmarks', 'compose', 'delete', 'download', 
            'favorites', 'home', 'info', 'locate', 'maps', 'more', 
            'organize', 'refresh', 'reply', 'search', 'settings', 
            'star', 'team', 'time', 'trash', 'user'];
        var iconAlignments = ['top', 'right', 'bottom', 'left', 'center'];
        var length = iconAlignments.length;
        var counter = -1;
        Ext.Array.each(icons, function (icon) {
            var align = iconAlignments[++counter % length];
            this.add({
                iconCls: icon,
                text: icon,
                iconMask: true,
                iconAlign: align,
                margin: '5 5 5 30'
            });
        }, this);
    }
});

