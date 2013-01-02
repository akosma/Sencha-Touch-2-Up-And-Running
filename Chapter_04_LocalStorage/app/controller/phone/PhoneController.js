Ext.define('Chapter4LocalStorage.controller.phone.PhoneController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            addButton: 'button[action=add]',
            saveButton: 'button[action=save]',
            deleteButton: 'button[action=deletePerson]',
            listView: 'indexview > #listView',
            indexView: 'indexview',
            personDeleteFieldset: '#personDeleteFieldset'
        },
        control: {
            listView: {
                itemtap: 'listViewItemTap' 
            },
            indexView: {
                back: 'indexViewBack'
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
                var store = Ext.getStore('PeopleStore');
                store.remove(person);
                this.getIndexView().pop();
                this.indexViewBack();
            }
        }, this);
    },

    add: function (button, e, eOpts) {
        var store = Ext.getStore('PeopleStore');
        var person = Ext.create('Chapter4LocalStorage.model.Person', {
            firstName: 'First',
            lastName: 'Last'
        });
        this.listViewItemTap(this.getListView(), 0, null, person, e, eOpts);
    },

    save: function (button, e, eOpts) {
        var person = this.formView.getRecord();
        this.formView.updateRecord(person);
        var store = Ext.getStore('PeopleStore');
        var storePerson = store.findRecord('entryId', person.get('entryId'));
        if (storePerson === null) {
            store.add(person);
        }
        this.getIndexView().pop();
        this.indexViewBack();
    },
    
    listViewItemTap: function (listView, index, target, record, e, eOpts) {
        this.getAddButton().hide();
        this.getSaveButton().show();
        var first = record.get('firstName');
        var last = record.get('lastName');
        var title = Ext.String.format('{0} {1}', first, last);
        this.formView = Ext.widget('formview', {
            title: title
        });
        this.formView.setRecord(record);

        // Check whether the delete button has to be shown
        var store = Ext.getStore('PeopleStore');
        var storePerson = store.findRecord('entryId', record.get('entryId'));
        this.getPersonDeleteFieldset().setHidden(storePerson === null);

        // Show the form
        var indexView = this.getIndexView();
        indexView.push(this.formView);
    },

    indexViewBack: function (indexView, eOpts) {
        this.getAddButton().show();
        this.getSaveButton().hide();
        var list = this.getListView();
        list.deselectAll();
    }
});

