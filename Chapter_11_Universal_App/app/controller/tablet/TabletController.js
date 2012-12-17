Ext.define('Chapter12Universal.controller.tablet.TabletController', {
    extend: 'Ext.app.Controller',
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

    listViewItemTap: function(list, index, target, record, e, eOpts) {
        var text = record.get('text');
        var splitView = this.getSplitView();

        splitView.setTitle(text);
        splitView.displayComponent(Ext.widget('panel', {
            html: text,
            title: text
        }));
    }
});

