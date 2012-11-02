Ext.define('Chapter5Forms.view.CheckboxSample', {
    extend: 'Ext.form.Panel',
    xtype: 'checkboxsample',
    config: {
        items: [{
            xtype: 'fieldset',
            title: 'Checkboxes',
            instructions: 'Select a country',
            items: [{
                xtype: 'checkboxfield',
                name: 'country',
                value: 'ar',
                label: 'Argentina',
                checked: false,
                labelWidth: '70%'
            }, {
                xtype: 'checkboxfield',
                name: 'country',
                value: 'fm',
                label: 'Federated States of Micronesia',
                labelWrap: true,
                labelWidth: '70%',
                required: false
            }, {
                xtype: 'checkboxfield',
                name: 'country',
                value: 'ch',
                label: 'Switzerland',
                checked: true,
                required: true,
                labelWidth: '70%'
            }, {
                xtype: 'checkboxfield',
                name: 'country',
                value: 'us',
                label: 'United States',
                checked: false,
                labelWidth: '70%'
            }]
        }]
    }
});

