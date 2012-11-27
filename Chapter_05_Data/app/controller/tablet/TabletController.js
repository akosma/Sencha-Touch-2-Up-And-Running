Ext.define('Chapter5Data.controller.tablet.TabletController', {
    extend: 'Chapter5Data.controller.MainController',
    config: {
        refs: {
            splitView: 'akosplitview',
            listView: 'indexview > #listView'
        },
        control: {
            listView: {
                itemtap: 'listViewItemTap' 
            }
        }
    },

    listViewItemTap: function (listView, index, target, record, e, eOpts) {
        var first = record.get('firstName');
        var last = record.get('lastName');
        var title = Ext.String.format('{0} {1}', first, last);
        var splitView = this.getSplitView();

        if (!splitView.formView) {
            splitView.formView = Ext.widget('formview');
            splitView.displayComponent(splitView.formView);
        }
        splitView.setTitle(title);
        splitView.formView.setRecord(record);
    }
});

