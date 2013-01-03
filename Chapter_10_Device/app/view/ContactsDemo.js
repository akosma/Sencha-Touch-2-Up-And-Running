Ext.define('Chapter10Device.view.ContactsDemo', {
    extend: 'Ext.Container',
    xtype: 'contactsdemo',
    config: {
        layout: 'fit',
        items: [{
            xtype: 'list',
            itemTpl: '{first} {last}',
            emptyText: 'Contacts not available',
            itemId: 'contactsList',
            store: {
                fields: ['first', 'last'],
                data: []
            }
        }]
    },
    initialize: function () {
        this.callParent(arguments);
        var list = this.down('#contactsList');
        Ext.device.Contacts.getContacts({
            success: function (data) {
                // Unfortunately this does not work as of Sencha Touch
                // 2.1 ... let's hope it will in future releases.
                // At the moment, 'data' is always an empty array.
                list.getStore().setData(data);
            }
        });
    }
});

