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
            'badgeText: ' + button.getBadgeText(),
            'iconAlign: ' + button.getIconAlign(),
            'iconCls: ' + button.getIconCls(),
            'text: ' + button.getText(),
            'ui: ' + button.getUi()
        ];
        var text = parts.join('<br>');
        Ext.Msg.alert('tap', text);
    }
});

