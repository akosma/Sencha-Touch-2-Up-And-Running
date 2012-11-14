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
        proxy: {
            type: 'ajax',
            url : 'Server/index.php?format=json'
        }
    }
});

