Ext.define('Chapter5Forms.view.TextFieldSample', {
    extend: 'Ext.form.Panel',
    xtype: 'textfieldsample',
    config: {
        items: [{
            xtype: 'fieldset',
            title: 'Text Fields',
            instructions: 'Select each field and see how the input experience changes',
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

