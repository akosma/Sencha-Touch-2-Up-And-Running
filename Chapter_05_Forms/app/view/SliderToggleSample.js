Ext.define('Chapter5Forms.view.SliderToggleSample', {
    extend: 'Ext.form.Panel',
    xtype: 'slidertogglesample',
    config: {
        items: [{
            xtype: 'fieldset',
            title: 'Slider and Toggle',
            items: [{
                xtype: 'sliderfield',
                minValue: 10,
                maxValue: 400,
                increment: 10,
                value: 100,
                label: 'Slider',
                name: 'slider'
            }, {
                xtype: 'togglefield',
                label: 'Toggle',
                name: 'toggle',
                value: true
            }]
        }]
    }
});

