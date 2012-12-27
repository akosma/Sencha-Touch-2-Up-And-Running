Ext.define('ToDoListApp.controller.TaskController', {
    extend: 'Ext.app.Controller',

    config: {
        id: 'taskController',
        refs: {
            saveButton: 'button[action=saveTask]',
            createTaskButton: 'button[action=createTask]',
            taskForm: '#taskForm',
            taskFormDeleteFieldset: '#taskFormDeleteFieldset',
            taskList: '#taskList',
            cancelButton: 'button[action=cancel]',
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

            cancelButton: {
                tap: 'cancel'
            },

            taskList: {
                itemtap: 'showTask',
                disclose: 'changeDoneStatus'
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

    changeDoneStatus: function (list, task, target, index, e, eOpts) {
        var done = task.get('completed');
        task.set('completed', !done);
    },

    showTask: function(list, index, target, task, e, eOpts) {

        // This is bug #w354352 in Sencha, to be done
        if (e.getTarget('.x-list-disclosure')) {
            return;
        }
        
        this.getTaskForm().setRecord(task);
        this.getTaskFormDeleteFieldset().setHidden(false);
        this.showForm();

        setTimeout(function () {
            list.deselect(index);
        }, 500);
    },

    cancel: function(button, e, eOpts) {
        this.showList();
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
        this.getTaskFormDeleteFieldset().setHidden(true);
        this.showForm();
    },

    showForm: function() {
        Ext.Viewport.getLayout().setAnimation({
            type: 'slide',
            direction: 'left'
        });
        Ext.Viewport.setActiveItem(this.getTaskForm());
    },

    showList: function() {
        this.updateTaskCount();
        Ext.Viewport.getLayout().setAnimation({
            type: 'slide',
            direction: 'right'
        });
        Ext.Viewport.setActiveItem(this.getTaskList());
    },

    updateTaskCount: function () {
        var store = this.getTaskList().getStore();
        var count = store.getCount();
        this.getTaskCountBar().setTitle(count + ' tasks');
    }
});

