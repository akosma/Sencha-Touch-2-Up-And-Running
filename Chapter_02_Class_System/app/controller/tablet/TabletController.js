Ext.define('Chapter2ClassSystem.controller.tablet.TabletController', {
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
        var screenName = record.get('screen');
        var splitView = this.getSplitView();

        if (!this.screens) {
            this.screens = {};
        }
        if (!this.screens[screenName]) {
            this.screens[screenName] = Ext.widget(screenName);
        }

        splitView.setTitle(text);
        splitView.displayComponent(this.screens[screenName]);
    }
});

