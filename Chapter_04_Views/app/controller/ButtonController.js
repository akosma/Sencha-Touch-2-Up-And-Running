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
        Ext.Msg.alert(button.getText());
    }
});

