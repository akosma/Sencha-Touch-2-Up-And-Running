Ext.define('ToDoListApp.view.TaskList', {
    extend: 'Ext.dataview.List',

    requires: [
        'ToDoListApp.store.TaskStore'
    ],

    config: {
        id: 'taskList',
        displayField: 'title',
        store: 'TaskStore',
        emptyText: '<p class="instructions">No tasks here yet; please touch the button "+" above to make one. If you do not want, please dont bother. But if you like this app, remember to pay it. Thanks.</p>',
        itemTpl: '<div class="task completed_{completed}">{title}</div>',
        grouped: true,
        onItemDisclosure: true,

        items: [{
            xtype: 'toolbar',
            title: 'To Do List',
            docked: 'top',
            items: [{
                xtype: 'spacer' 
            }, 
            {
                xtype: 'button',
                iconCls: 'add',
                iconMask: true,
                text: '',
                ui: 'plain',
                action: 'createTask'
            }]
        }, {
            xtype: 'toolbar',
            title: '',
            docked: 'bottom',
            id: 'taskCountBar'
        }]
    }
});

