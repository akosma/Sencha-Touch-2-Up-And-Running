Ext.define('Chapter5Data.controller.phone.PhoneController', {
    extend: 'Chapter5Data.controller.MainController',
    config: {
        refs: {
            listView: '#listView',
            navigationView: '#navigationView'
        },
        control: {
            listView: {
                itemtap: 'listViewItemTap' 
            },
            navigationView: {
                back: 'navigationViewBack'
            }
        }
    },

    listViewItemTap: function (listView, index, target, record, e, eOpts) {
        this.getRefreshButton().setHidden(true);
        this.getSwitchFormatSegmentedButton().setHidden(true);
        var first = record.get('firstName');
        var last = record.get('lastName');
        var title = Ext.String.format('{0} {1}', first, last);
        var formView = Ext.widget('formview', {
            title: title
        });
        formView.setRecord(record);
        var navigationView = this.getNavigationView();
        navigationView.push(formView);
    },

    navigationViewBack: function (navigationView, eOpts) {
        this.getRefreshButton().setHidden(false);
        this.getSwitchFormatSegmentedButton().setHidden(false);
        var list = this.getListView();
        list.deselectAll();
    }
});

