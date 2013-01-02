Ext.define('Chapter4Data.store.PeopleStore', {
    extend: 'Ext.data.Store',
    xtype: 'peoplestore',
    config: {
        model: 'Chapter4Data.model.Person',
        storeId: 'PeopleStore',
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

