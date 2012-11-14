Ext.define('Chapter5Data.view.FormView', {
    extend: 'Ext.form.Panel',
    xtype: 'formview',
    config: {
        items: [{
            xtype: 'fieldset',
            title: 'Contact Information',
            instructions: 'This information is confidential',
            items: [{
                xtype: 'textfield',
                name: 'firstName',
                label: 'First'
            }, {
                xtype: 'textfield',
                name: 'lastName',
                label: 'Last'
            }, {
                xtype: 'textfield',
                name: 'phone',
                label: 'Phone'
            }, {
                xtype: 'emailfield',
                name: 'email',
                label: 'Email'
            }, {
                xtype: 'textfield',
                name: 'address',
                label: 'Address'
            }, {
                xtype: 'textfield',
                name: 'city', 
                label: 'City'
            }, {
                xtype: 'textfield',
                name: 'zip', 
                label: 'ZIP'
            }, {
                xtype: 'textfield',
                name: 'state',
                label: 'State'
            }, {
                xtype: 'textfield',
                name: 'country',
                label: 'Country'
            }, {
                xtype: 'textareafield',
                name: 'description',
                label: 'Description'
            }, {
                xtype: 'passwordfield', 
                name: 'password',
                label: 'Password'
            }]
        }]
    }
});

