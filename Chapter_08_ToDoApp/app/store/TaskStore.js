Ext.define('ToDoListApp.store.TaskStore', {
    extend: 'Ext.data.Store',
    requires: [ 'ToDoListApp.model.Task' ],
    config: {
        autoLoad: true,
        autoSync: true,
        model: 'ToDoListApp.model.Task',
        storeId: 'TaskStore',
        proxy: {
            type: 'localstorage',
            id: 'senchatasks'
        },
        sorters: [{
            property: 'dueDate',
            direction: 'ASC'
        }],
        grouper: function (record) {
            if (record && record.get('dueDate')) {
                return record.get("dueDate").toDateString();
            }
        }
    }
});

