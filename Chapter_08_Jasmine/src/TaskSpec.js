describe ("Task", function() {
    var task = null;

    beforeEach (function() {
        task = Ext.create('ToDoListApp.model.Task');
    });

    describe ("when a new one is created", function () {
        it ("should have an empty description", function () {
            expect(task.get('description')).toBeNull();
        });

        it ("should have an empty name", function () {
            expect(task.get('title')).toEqual('');
        });

        it ("should not be completed", function () {
            expect(task.get('completed')).toBeFalsy();
        });
    });

    describe ("when one is modified", function () {
        it ("should have the description passed as parameter", function () {
            var newDescription = "Whatever";
            task.set('description', newDescription);
            expect(task.get('description')).toEqual(newDescription);
        });

        it ("should have the specified date", function () {
            var newDate = new Date();
            task.set('duedate', newDate);
            expect(task.get('duedate')).toEqual(newDate);
        });

        it ("should have the specified completed status", function () {
            task.set('completed', true);
            expect(task.get('completed')).toBeTruthy();
        });

        it ("should have the name specified as parameter", function () {
            var newName = "new name";
            task.set('title', newName);
            expect(task.get('title')).toEqual(newName);
        });
    });

    describe ("when one is reset", function () {
        it ("should not be marked as done", function () {
            task.set('completed', false);
            expect(task.get('completed')).toBeFalsy();
        });
    });
});

