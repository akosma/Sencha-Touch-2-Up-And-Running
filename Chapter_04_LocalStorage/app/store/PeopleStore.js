Ext.define('Chapter4LocalStorage.store.PeopleStore', {
    extend: 'Ext.data.Store',
    xtype: 'peoplestore',
    config: {
        model: 'Chapter4LocalStorage.model.Person',
        storeId: 'PeopleStore',
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

