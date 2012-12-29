Ext.define('ToDoListApp.controller.TaskController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            navigationView: 'navigationview',
            saveButton: 'button[action=saveTask]',
            createTaskButton: 'button[action=createTask]',
            taskList: 'tasklist',
            deleteButton: 'button[action=deleteTask]',
            taskCountBar: '#taskCountBar'
        },
        control: {
            saveButton: {
                tap: 'saveTask'
            },

            createTaskButton: {
                tap: 'createTask'
            },

            taskList: {
                itemsingletap: 'showTask',
                disclose: 'changeDoneStatus',
                itemswipe: 'deleteTaskSwipe'
            },

            deleteButton: {
                tap: 'deleteTask'
            }
        }
    },

    launch: function () {
        this.updateTaskCount();
    },

    deleteTask: function(button, e, eOpts) {
        Ext.Msg.confirm('Delete this task?', 'You cannot undo this!', function (answer) {
            if (answer === 'yes') {
                var task = this.getTaskForm().getRecord();
                var store = this.getTaskList().getStore();
                store.remove(task);
                this.showList();
            }
        }, this);
    },

    deleteTaskSwipe: function (list, index, target, record, e, eOpts) {
        var title = 'Delete the task "' + record.get('title') + '"?';
        Ext.Msg.confirm(title, 'You cannot undo this!', function (answer) {
            if (answer === 'yes') {
                var store = this.getTaskList().getStore();
                store.remove(record);
                this.updateTaskCount();
            }
        }, this);
    },

    changeDoneStatus: function (list, task, target, index, e, eOpts) {
        var done = task.get('completed');
        task.set('completed', !done);
    },

    showTask: function(list, index, target, task, e, eOpts) {
        this.getTaskForm().setRecord(task);
        this.getDeleteButton().setHidden(false);
        this.getNavigationView().push(this.getTaskForm());

        setTimeout(function () {
            list.deselect(index);
        }, 500);
    },

    saveTask: function (button, e, eOpts) {
        var store = this.getTaskList().getStore();
        var task = this.getTaskForm().getRecord();
        this.getTaskForm().updateRecord(task);

        // Is it a new object?
        if (null === store.findRecord("id", task.get('id'))) {
            store.add(task);
        }

        this.showList();
    },

    createTask: function(button, e, eOpts) {
        var newTask = Ext.create('ToDoListApp.model.Task', {
            title: '',
            description: '',
            completed: false,
            dueDate: new Date()
        });

        this.getTaskForm().setRecord(newTask);
        this.getDeleteButton().setHidden(true);
        this.getNavigationView().push(this.getTaskForm());
    },

    showList: function() {
        this.updateTaskCount();
        this.getNavigationView().pop();
    },

    updateTaskCount: function () {
        var store = this.getTaskList().getStore();
        var count = store.getCount();
        this.getTaskCountBar().setTitle(count + ' tasks');
    },

    getTaskForm: function () {
        if (!this.taskForm) {
            this.taskForm = Ext.widget('taskform');
        }
        return this.taskForm;
    }
});

