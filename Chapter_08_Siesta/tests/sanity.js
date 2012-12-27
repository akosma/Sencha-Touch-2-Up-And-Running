StartTest(function(t) {
    t.diag("Sanity");

    t.ok(Ext, 'Sencha is here');

    t.requireOk('ToDoListApp.view.TaskForm');
    t.requireOk('ToDoListApp.view.TaskList');
    t.requireOk('ToDoListApp.store.TaskStore');
    t.requireOk('ToDoListApp.model.Task');
    t.requireOk('ToDoListApp.controller.TaskController');
});

