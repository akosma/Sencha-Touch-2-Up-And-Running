Ext.define('Chapter3Layouts.controller.tablet.TabletController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            splitView: 'akosplitview',
            indexView: 'indexview',
            listView: 'indexview > #listView'
        },
        control: {
            listView: {
                itemtap: 'listViewItemTap' 
            }
        }
    },

    listViewItemTap: function(list, index, target, record, e, eOpts) {
        var splitView = this.getSplitView();
        var text = record.get('text');
        var screenName = record.get('screen');

        if (!this.screens) {
            this.screens = {};
        }
        if (!this.screens[screenName]) {
            this.screens[screenName] = Ext.widget(screenName, {
                title: text
            });
        }

        splitView.setTitle(text);
        splitView.displayComponent(this.screens[screenName]);
    }
});

