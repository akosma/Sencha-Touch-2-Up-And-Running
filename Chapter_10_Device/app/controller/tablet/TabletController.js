Ext.define('Chapter10Device.controller.tablet.TabletController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            splitView: 'akosplitview',
            listView: 'indexview > #listView'
        },
        control: {
            listView: {
                itemsingletap: 'listViewItemTap' 
            }
        }
    },

    listViewItemTap: function(list, index, target, record, e, eOpts) {
        var splitView = this.getSplitView();
        var text = record.get('text');
        var screenName = record.get('screen');
        var widget = Ext.widget(screenName);
        splitView.setTitle(text);
        splitView.displayComponent(widget);
    }
});

