Ext.define('Chapter5LocalStorage.store.PeopleStore', {
    extend: 'Ext.data.Store',
    xtype: 'peoplestore',
    config: {
        model: 'Chapter5LocalStorage.model.Person',
        storeId: 'peopleStore',
        autoLoad: true,
        autoSync: true,
        sorters: [{
            property: 'firstName',
            direction: 'ASC'
        }],
        proxy: {
            type: 'localstorage',
            id: 'peopleproxy'
        }
    }
});

