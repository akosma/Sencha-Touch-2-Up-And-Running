Ext.define('ToDoListApp.view.TaskForm', {
    extend: 'Ext.form.Panel',

    config: {
        id: 'taskForm',
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            title: 'Task',
            items: [{
                xtype: 'button',
                text: 'Back',
                ui: 'back',
                action: 'cancel'
            }, 
            {
                xtype: 'spacer'
            }, 
            {
                xtype: 'button',
                text: 'Save',
                action: 'saveTask'
            }]
        }, 
        {
            xtype: 'fieldset',
            id: 'mainFieldset',
            instructions: 'Enter the details of the task',
            title: 'Task Details',
            items: [{
                xtype: 'textfield',
                id: 'titleField',
                label: 'Title',
                name: 'title',
                autoCapitalize: true,
                placeHolder: 'Enter a title'
            }, 
            {
                xtype: 'textareafield',
                id: 'descriptionField',
                label: 'Description',
                name: 'description',
                autoCapitalize: true,
                placeHolder: 'Enter a description'
            }, 
            {
                xtype: 'datepickerfield',
                id: 'dateField',
                label: 'Due on',
                name: 'dueDate',
                placeHolder: 'dd/mm/yyyy',
                dateFormat: 'D d M Y',
                picker: {
                    slotOrder: ['day', 'month', 'year'],
                    yearFrom: (new Date().getFullYear()),
                    yearTo: (new Date().getFullYear()) + 10
                }
            }, 
            {
                xtype: 'togglefield',
                id: 'completedField',
                label: 'Done',
                name: 'completed'
            }]
        },
        {
            xtype: 'fieldset',
            id: 'taskFormDeleteFieldset',
            title: 'Actions',
            instructions: 'This cannot be undone',
            items: [{
                xtype: 'button',
                height: 44,
                id: 'deleteButton',
                ui: 'decline',
                text: 'Delete this task',
                action: 'deleteTask'
            }]
        }]
    }
});

