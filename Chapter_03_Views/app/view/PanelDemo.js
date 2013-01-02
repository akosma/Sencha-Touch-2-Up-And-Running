Ext.define('Chapter3Views.view.PanelDemo', {
    extend: 'Ext.Container',
    xtype: 'paneldemo',
    config: {
        defaults: {
            margin: 20
        },
        items: [{
            xtype: 'label',
            html: 'Panels can appear floating over other components.'
        }, {
            xtype: 'button',
            text: 'Touch to open panel',
            itemId: 'openPanelButton',
            listeners: {
                tap: function (button, e, eOpts) {
                    if (!button.panel) {
                        button.panel = Ext.widget('panel', {
                            html: 'This is a panel. It is useful to set "hideOnMaskTap", "modal" and "hideAnimation" + "showAnimation" for a fancy appearance!',
                            padding: 20,
                            width: 280,
                            modal: true,
                            hideOnMaskTap: true,
                            hidden: true,
                            hideAnimation: 'fadeOut',
                            showAnimation: 'fadeIn'
                        });
                    }
                    button.panel.showBy(button);
                }
            }
        }]
    },
    initialize: function () {
        var button = this.getComponent('openPanelButton');
        var task = Ext.create('Ext.util.DelayedTask', function() {
            button.fireEvent('tap', button);
        });

        task.delay(750);
    }
});

