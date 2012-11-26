Ext.define('Chapter12Universal.controller.tablet.TabletController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            splitView: 'akosplitview',
            listView: 'indexview > #listView',
            indexView: 'indexview'
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

        var screenName = record.get('screen');
        if (!this.screens) {
            this.screens = {};
        }
        if (!this.screens[screenName]) {
            this.screens[screenName] = Ext.widget(screenName);
        }

        splitView.displayComponent(this.screens[screenName]);
        splitView.hideOverlayView();
    }
});

