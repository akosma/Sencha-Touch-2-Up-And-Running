Ext.define('Chapter4Views.controller.ButtonController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            button: 'buttondemo > button'
        },
        control: {
            button: {
                tap: 'tap'
            }
        }
    },

    tap: function (button, e, eOpts) {
        var parts = [
            'text: ' + button.getText(),
            'iconCls: ' + button.getIconCls(),
            'iconAlign: ' + button.getIconAlign(),
            'badgeText: ' + button.getBadgeText()
        ];
        var text = parts.join('<br>');
        Ext.Msg.alert('tap', text);
    }
});

