Ext.define('ToDoListApp.view.TaskList', {
    extend: 'Ext.dataview.List',
    xtype: 'tasklist',

    requires: [
        'ToDoListApp.store.TaskStore'
    ],

    config: {
        title: 'To Do List',
        itemId: 'taskList',
        displayField: 'title',
        store: 'TaskStore',
        emptyText: '<p class="instructions">No tasks here yet; please touch the button "+" above to make one. If you do not want, please dont bother. But if you like this app, remember to pay it. Thanks.</p>',
        itemTpl: '<div class="task completed_{completed}">{title}</div>',
        grouped: true,
        onItemDisclosure: true,

        items: [{
            xtype: 'toolbar',
            title: '',
            docked: 'bottom',
            id: 'taskCountBar',
            items: [{
                xtype: 'spacer'
            }, {
                xtype: 'button',
                iconCls: 'add',
                iconMask: true,
                text: '',
                ui: 'plain',
                action: 'createTask'
            }]
        }]
    }
});

