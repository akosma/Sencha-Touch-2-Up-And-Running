Ext.define('Chapter5DataViews.controller.tablet.TabletController', {
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

    listViewItemTap: function (listView, index, target, record, e, eOpts) {
        var screenName = record.get('screen');

        if (!this.screens) {
            this.screens = {};
        }
        if (!this.screens[screenName]) {
            this.screens[screenName] = Ext.widget(screenName);
        }

        var screen = this.screens[screenName];
        var title = screen.getTitle();
        var splitView = this.getSplitView();
        splitView.setTitle(title);
        splitView.displayComponent(screen);
    }
});

