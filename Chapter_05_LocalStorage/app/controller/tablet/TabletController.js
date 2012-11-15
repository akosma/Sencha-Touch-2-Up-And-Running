Ext.define('Chapter5LocalStorage.controller.tablet.TabletController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            addButton: 'button[action=add]',
            saveButton: 'button[action=saveTablet]',
            rootView: '#rootView',
            listView: '#listView',
            mainPane: '#mainPane',
            titleToolbar: '#titleToolbar',
            showMenuButton: 'button[action=showMenu]',
            navigationView: '#navigationView',
            deleteButton: 'button[action=deletePerson]'
        },
        control: {
            listView: {
                itemtap: 'listViewItemTap' 
            },
            showMenuButton: {
                tap: 'showMenu'
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
                Ext.destroy(this.formView);
                this.formView = null;
            }
        }, this);
    },
    
    add: function (button, e, eOpts) {
        var person = Ext.create('Chapter5LocalStorage.model.Person', {
            firstName: 'First',
            lastName: 'Last'
        });
        var store = Ext.getStore('peopleStore');
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
    
    launch: function () {
        var o = Ext.Viewport.getOrientation();
        this.handleOrientationChange({ orientation: o });
        Ext.Viewport.onBefore('orientationchange', 'handleOnBeforeOrientationChange', this, { buffer: 50 });
        Ext.Viewport.on('orientationchange', 'handleOrientationChange', this, { buffer: 50 });
    },

    handleOnBeforeOrientationChange: function () {
        if (this.overlay) {
            this.overlay.hide();
        }
    },

    handleOrientationChange: function (obj) {
        var navigationView = this.getNavigationView();
        var showMenuButton = this.getShowMenuButton();
        var o = obj.orientation;
        var rootView = this.getRootView();
        if (o === 'landscape') {
            navigationView.setHidden(false);
            showMenuButton.setHidden(true);
        }
        else if (o === 'portrait') {
            navigationView.setHidden(true);
            showMenuButton.setHidden(false);
        }
    },

    createOverlay: function () {
        if (!this.overlay) {
            this.overlay = Ext.Viewport.add({
                xtype: 'panel',
                layout: 'card',
                modal: true,
                hideOnMaskTap: true,
                width: 340,
                height: 600,
                hidden: true
            });
            this.overlay.addListener('show', function () {
                this.overlay.add(this.getNavigationView());
            }, this);
            this.overlay.addListener('hide', function () {
                this.getRootView().insert(0, this.getNavigationView());
            }, this);
        }
    },

    showMenu: function (button, e, eOpts) {
        this.createOverlay();
        var showMenuButton = this.getShowMenuButton();
        this.overlay.showBy(showMenuButton, 'tl-bc');
    },

    listViewItemTap: function (listView, index, target, record, e, eOpts) {
        this.save();
        this.getSaveButton().setHidden(false);
        var first = record.get('firstName');
        var last = record.get('lastName');
        var title = Ext.String.format('{0} {1}', first, last);
        this.getTitleToolbar().setTitle(title);

        if (!this.formView) {
            this.formView = Ext.widget('formview');
        }
        this.formView.setRecord(record);

        var mainPane = this.getMainPane();
        mainPane.setActiveItem(this.formView);

        if (this.overlay) {
            this.overlay.hide();
        }
    }
});

