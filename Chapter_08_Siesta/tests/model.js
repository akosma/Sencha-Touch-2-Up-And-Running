StartTest(function(t) {
    t.diag("Testing Task model");

    t.requireOk('ToDoListApp.model.Task', function() {
        var task = Ext.create('ToDoListApp.model.Task', {
            title: 'Buy milk',
            description: 'This is a test task',
            completed: true,
            dueDate: new Date()
        });
        
        t.is(task.get('title'), 'Buy milk', 'title works ok');
        t.is(task.get('description'), 'This is a test task', 'Could read description');
        t.ok(task.get('completed'), 'The task is completed');
        t.isNot(task.get('dueDate'), null, 'The task date must not be null');
    });
});

