Ext.define('ToDoListApp.view.TaskForm', {
    extend: 'Ext.form.Panel',
    xtype: 'taskform',
    config: {
        itemId: 'taskForm',
        title: 'Task',
        items: [{
            xtype: 'toolbar',
            docked: 'bottom',
            items: [{
                xtype: 'button',
                id: 'deleteButton',
                ui: 'decline',
                text: 'Delete',
                action: 'deleteTask'
            }, {
                xtype: 'spacer'
            }, {
                xtype: 'button',
                text: 'Save',
                action: 'saveTask',
                ui: 'confirm'
            }]
        }, {
            xtype: 'fieldset',
            itemId: 'mainFieldset',
            instructions: 'Enter the details of the task',
            title: 'Task Details',
            items: [{
                xtype: 'textfield',
                itemId: 'titleField',
                label: 'Title',
                name: 'title',
                autoCapitalize: true,
                placeHolder: 'Enter a title'
            }, {
                xtype: 'textareafield',
                itemId: 'descriptionField',
                label: 'Description',
                name: 'description',
                autoCapitalize: true,
                placeHolder: 'Enter a description'
            }, {
                xtype: 'datepickerfield',
                itemId: 'dateField',
                label: 'Due on',
                name: 'dueDate',
                placeHolder: 'dd/mm/yyyy',
                dateFormat: 'D d M Y',
                picker: {
                    slotOrder: ['day', 'month', 'year'],
                    yearFrom: (new Date().getFullYear()),
                    yearTo: (new Date().getFullYear()) + 10
                }
            }, {
                xtype: 'togglefield',
                itemId: 'completedField',
                label: 'Done',
                name: 'completed'
            }]
        }]
    }
});

