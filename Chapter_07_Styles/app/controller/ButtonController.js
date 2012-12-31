Ext.define('Chapter7Styles.controller.ButtonController', {
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
            'iconMask: ' + button.getIconMask(),
            'text: ' + button.getText(),
            'ui: ' + button.getUi()
        ];
        var text = parts.join('<br>');
        console.log(text);
    }
});

