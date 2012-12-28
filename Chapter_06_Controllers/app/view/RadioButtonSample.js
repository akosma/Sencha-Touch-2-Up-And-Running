Ext.define('Chapter6Controllers.view.RadioButtonSample', {
    extend: 'Ext.form.Panel',
    xtype: 'radiobuttonsample',
    config: {
        items: [{
            xtype: 'fieldset',
            title: 'Radio buttons',
            instructions: 'Select only one country',
            items: [{
                xtype: 'radiofield',
                name: 'country',
                value: 'dk',
                label: 'Denmark',
                labelWrap: true
            }, {
                xtype: 'radiofield',
                name: 'country',
                value: 'de',
                label: 'Germany',
                checked: false
            }, {
                xtype: 'radiofield',
                name: 'country',
                value: 'za',
                label: 'South Africa',
                checked: false
            }, {
                xtype: 'radiofield',
                name: 'country',
                value: 'tw',
                label: 'Taiwan',
                checked: true
            }]
        }]
    }
});

