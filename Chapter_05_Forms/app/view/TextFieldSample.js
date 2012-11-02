Ext.define('Chapter5Forms.view.TextFieldSample', {
    extend: 'Ext.form.Panel',
    xtype: 'textfieldsample',
    config: {
        items: [{
            xtype: 'fieldset',
            title: 'Text Fields',
            instructions: 'Select each field and see how the input experience changes',
            items: [{
                xtype: 'datepickerfield',
                name: 'date',
                label: 'Date Picker',
                dateFormat: 'D d M Y',
                placeHolder: 'dd/mm/yyyy',
                picker: {
                    slotOrder: [ 'day', 'month', 'year' ],
                    yearFrom: (new Date()).getFullYear(),
                    yearTo: (new Date()).getFullYear() + 20
                }
            }, {
                xtype: 'emailfield',
                name: 'email',
                value: 'test@akosma.com',
                label: 'Email Field',
                required: false
            }, {
                xtype: 'hiddenfield',
                name: 'hidden',
                value: 'Some invisible value',
                label: 'Hidden Field'
            }, {
                xtype: 'numberfield',
                name: 'number',
                value: '350',
                label: 'Number Field',
                minValue: 100,
                maxValue: 500,
                stepValue: 10
            }, {
                xtype: 'spinnerfield',
                name: 'spinner',
                value: '6500',
                label: 'Spinner Field',
                minValue: 1000,
                maxValue: 10000,
                stepValue: 10,
                accelerateOnTapHold: true,
                cycle: false,
                increment: 200,
                groupButtons: false
            }, {
                xtype: 'passwordfield',
                name: 'password',
                value: 'Some secret password',
                label: 'Password Field'
            }, {
                xtype: 'searchfield',
                name: 'search',
                value: 'Search text',
                label: 'Search Field'
            }, {
                xtype: 'selectfield',
                name: 'select',
                label: 'Select Field',
                options: [{
                    display: 'key1',
                    value: 'value1'
                }, {
                    display: 'key2',
                    value: 'value2'
                }, {
                    display: 'key3',
                    value: 'value3'
                }],
                displayField: 'display',
                valueField: 'value'
            }, {
                xtype: 'selectfield',
                name: 'select',
                label: 'Select Field with Picker',
                usePicker: true,
                options: [{
                    display: 'key1',
                    value: 'value1'
                }, {
                    display: 'key2',
                    value: 'value2'
                }, {
                    display: 'key3',
                    value: 'value3'
                }],
                displayField: 'display',
                valueField: 'value'
            }, {
                xtype: 'textareafield',
                name: 'textarea',
                label: 'Text Area Field'
            }, {
                xtype: 'urlfield',
                name: 'url',
                label: 'URL',
                value: 'http://akosma.com/'
            }]
        }]
    }
});

