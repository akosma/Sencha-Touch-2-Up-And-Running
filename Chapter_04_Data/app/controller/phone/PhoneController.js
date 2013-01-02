Ext.define('Chapter4Data.controller.phone.PhoneController', {
    extend: 'Chapter4Data.controller.MainController',
    config: {
        refs: {
            listView: 'indexview > #listView',
            indexView: 'indexview'
        },
        control: {
            listView: {
                itemsingletap: 'listViewItemTap' 
            },
            indexView: {
                back: 'indexViewBack'
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
        var indexView = this.getIndexView();
        indexView.push(formView);
    },

    indexViewBack: function (indexView, eOpts) {
        this.getRefreshButton().setHidden(false);
        this.getSwitchFormatSegmentedButton().setHidden(false);
        var list = this.getListView();
        list.deselectAll();
    }
});

