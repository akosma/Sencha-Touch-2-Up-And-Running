Ext.define('ToDoListApp.view.TaskList', {
    extend: 'Ext.dataview.List',
    xtype: 'tasklist',
    requires: [ 'ToDoListApp.store.TaskStore' ],
    config: {
        title: 'To Do List',
        itemId: 'taskList',
        displayField: 'title',
        store: 'TaskStore',
        emptyText: '<p class="instructions">No tasks here yet; please touch the button "+" in the toolbar below to make one.<br>If you like this app, buy the book! :) Thanks.</p>',
        itemTpl: '<div class="task completed_{completed}">{title}</div>',
        grouped: true,
        onItemDisclosure: true,

        items: [{
            xtype: 'toolbar',
            title: '',
            docked: 'bottom',
            itemId: 'taskCountBar',
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

