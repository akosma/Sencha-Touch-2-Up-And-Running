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
            },
            akosplitview: {
                masterviewshow: 'masterViewShow',
                masterviewhide: 'masterViewHide',
                overlayhide: 'overlayHide',
                overlayshow: 'overlayShow'
            }
        }
    },

    masterViewShow: function (splitView) {
        console.log('controller: masterviewshow event');
    },
    
    masterViewHide: function (splitView) {
        console.log('controller: masterviewhide event');
    },

    overlayHide: function (splitview) {
        console.log('controller: overlayhide event');
    },

    overlayShow: function (splitview) {
        console.log('controller: overlayshow event');
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

