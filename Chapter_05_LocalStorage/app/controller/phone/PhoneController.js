Ext.define('Chapter5LocalStorage.controller.phone.PhoneController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            addButton: 'button[action=add]',
            saveButton: 'button[action=save]',
            listView: '#listView',
            navigationView: '#navigationView',
            deleteButton: 'button[action=deletePerson]',
            personDeleteFieldset: '#personDeleteFieldset'
        },
        control: {
            listView: {
                itemtap: 'listViewItemTap' 
            },
            navigationView: {
                back: 'navigationViewBack'
            },
            addButton: {
                tap: 'add' 
            },
            saveButton: {
                tap: 'save'
            },
            deleteButton: {
                tap: 'deletePerson'
            }
        }
    },

    deletePerson: function (button, e, eOpts) {
        Ext.Msg.confirm('Delete this person?', '', function (answer) {
            if (answer === 'yes') {
                var person = this.formView.getRecord();
                var store = Ext.getStore('peopleStore');
                store.remove(person);
                this.getNavigationView().pop();
                this.navigationViewBack();
            }
        }, this);
    },

    add: function (button, e, eOpts) {
        var store = Ext.getStore('peopleStore');
        var person = Ext.create('Chapter5LocalStorage.model.Person', {
            firstName: 'First',
            lastName: 'Last'
        });
        this.listViewItemTap(this.getListView(), 0, null, person, e, eOpts);
    },

    save: function (button, e, eOpts) {
        var person = this.formView.getRecord();
        this.formView.updateRecord(person);
        var store = Ext.getStore('peopleStore');
        var storePerson = store.findRecord('entryId', person.get('entryId'));
        if (storePerson === null) {
            store.add(person);
        }
        this.getNavigationView().pop();
        this.navigationViewBack();
    },
    
    listViewItemTap: function (listView, index, target, record, e, eOpts) {
        this.getAddButton().setHidden(true);
        this.getSaveButton().setHidden(false);
        var first = record.get('firstName');
        var last = record.get('lastName');
        var title = Ext.String.format('{0} {1}', first, last);
        this.formView = Ext.widget('formview', {
            title: title
        });
        this.formView.setRecord(record);

        // Check whether the delete button has to be shown
        var store = Ext.getStore('peopleStore');
        var storePerson = store.findRecord('entryId', record.get('entryId'));
        this.getPersonDeleteFieldset().setHidden(storePerson === null);

        // Show the form
        var navigationView = this.getNavigationView();
        navigationView.push(this.formView);
    },

    navigationViewBack: function (navigationView, eOpts) {
        this.getAddButton().setHidden(false);
        this.getSaveButton().setHidden(true);
        var list = this.getListView();
        list.deselectAll();
    }
});

