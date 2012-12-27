StartTest(function(t) {
    t.diag("Create Task");

    t.requireOk([
                'ToDoListApp.model.Task',
                'ToDoListApp.store.TaskStore', 
                'ToDoListApp.view.TaskList', 
                'ToDoListApp.view.TaskForm',
                'ToDoListApp.controller.TaskController'
    ], 
    function() {
        var grid = Ext.create('ToDoListApp.view.TaskList');

        var form = Ext.create('ToDoListApp.view.TaskForm');
        Ext.Viewport.add(form);

        t.waitForCQ("formpanel[rendered=true]", Ext.Viewport, function() {

            var titleField = form.down('#titleField');
            var descriptionField = form.down('#descriptionField');

            var task = Ext.create('ToDoListApp.model.Task');
            task.set('title', 'Buy milk');
            task.set('description', 'without fat');
            form.setRecord(task);

            t.chain({
                action: 'click',
                target: titleField
            }, 
            {
                action: 'click',
                target: descriptionField
            },
            function (next) {
                t.is(titleField.getValue(), 'Buy milk', 'Title field is OK');
                t.is(descriptionField.getValue(), 'without fat', 'Title field is OK');
                next();
            },
            function (next) {
                titleField.setValue('Call friend');
                descriptionField.setValue('because of birthday');
                next();
            },
            function (next) {
                t.is(titleField.getValue(), 'Call friend', 'Title field is OK');
                t.is(descriptionField.getValue(), 'because of birthday', 'Title field is OK');
                next();
            },
            function (next) {
                var task = form.getRecord();
                form.updateRecord(task);
                t.is(task.get('title'), 'Call friend', 'The title field is updated');
                t.is(task.get('description'), 'because of birthday', 'The description field is updated');
            });
        });
    });
});

