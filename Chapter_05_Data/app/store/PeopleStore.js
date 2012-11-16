Ext.define('Chapter5Data.store.PeopleStore', {
    extend: 'Ext.data.Store',
    xtype: 'peoplestore',
    config: {
        model: 'Chapter5Data.model.Person',
        storeId: 'peopleStore',
        autoLoad: true,
        sorters: [{
            property: 'firstName',
            direction: 'ASC'
        }],
        grouper: {
            groupFn: function(record) {
                return record.get('firstName').substr(0, 1);
            }
        },
        proxy: {
            type: 'ajax',
            url : 'Server/index.php?format=json'
        }
    }
});

