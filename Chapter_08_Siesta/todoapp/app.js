Ext.Loader.setConfig({
    enabled: true
});

Ext.application({

    models: [
        'Task'
    ],

    stores: [
        'TaskStore'
    ],

    views: [
        'TaskList',
        'TaskForm'
    ],

    controllers: [
        'TaskController'
    ],

    name: 'ToDoListApp',

    launch: function () {
        var list = Ext.create('ToDoListApp.view.TaskList');
        var form = Ext.create('ToDoListApp.view.TaskForm');
        Ext.Viewport.add([list, form]);
    }
});

