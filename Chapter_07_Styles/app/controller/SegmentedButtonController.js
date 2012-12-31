Ext.define('Chapter7Styles.controller.SegmentedButtonController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            button: 'segmentedbuttondemo > segmentedbutton'
        },
        control: {
            button: {
                toggle: 'toggle'
            }
        }
    },

    toggle: function (segmentedbutton, button, isPressed, eOpts) {
        var buttons = segmentedbutton.getPressedButtons();
        var parts = Ext.Array.map(buttons, function (btn) {
            return btn.getText();
        }, this);
        var text = parts.join('<br>');
        console.log(text);
    }
});

