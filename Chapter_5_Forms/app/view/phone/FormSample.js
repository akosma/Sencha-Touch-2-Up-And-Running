Ext.define('Chapter5Forms.view.phone.FormSample', {
    extend: 'Ext.form.Panel',
    xtype: 'formsample',
    config: {
        items: [{
            xtype: 'titlebar',
            title: 'Checkboxes',
            docked: 'top',
            items: [{
                xtype: 'button',
                text: 'Submit',
                listeners: {
                    tap: function() {
                        var form = Ext.ComponentQuery.query('formsample')[0];
                        var values = form.getValues();
                        Ext.Msg.alert(JSON.stringify(values));
                    }
                }
            }]
        }, {
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

