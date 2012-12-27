Ext.define('Chapter5LocalStorage.controller.tablet.TabletController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            addButton: 'button[action=add]',
            saveButton: 'button[action=saveTablet]',
            deleteButton: 'button[action=deletePerson]',
            splitView: 'akosplitview',
            listView: 'indexview > #listView'
        },
        control: {
            listView: {
                itemtap: 'listViewItemTap' 
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
                var splitView = this.getSplitView();
                store.remove(person);
                Ext.destroy(this.formView);
                this.formView = null;
                splitView.setTitle('');
                this.getSaveButton().hide();
            }
        }, this);
    },

    add: function (button, e, eOpts) {
        var person = Ext.create('Chapter5LocalStorage.model.Person', {
            firstName: 'First',
            lastName: 'Last'
        });
        var store = Ext.getStore('PeopleStore');
        store.add(person);
        this.getListView().select(person);
        this.listViewItemTap(this.getListView(), 0, null, person, e, eOpts);
    },

    save: function (button, e, eOpts) {
        if (this.formView) {
            var person = this.formView.getRecord();
            this.formView.updateRecord(person);
        }
    },

    listViewItemTap: function (listView, index, target, record, e, eOpts) {
        this.save();
        this.getSaveButton().show();
        var first = record.get('firstName');
        var last = record.get('lastName');
        var title = Ext.String.format('{0} {1}', first, last);
        var splitView = this.getSplitView();

        if (!this.formView) {
            this.formView = Ext.widget('formview');
        }
        this.formView.setRecord(record);

        splitView.setTitle(title);
        splitView.displayComponent(this.formView);
    }
});

