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
        Ext.Msg.alert('masterviewshow event');
    },
    
    masterViewHide: function (splitView) {
        Ext.Msg.alert('masterviewhide event');
    },

    overlayHide: function (splitview) {
        Ext.Msg.alert('overlayhide event');
    },

    overlayShow: function (splitview) {
        Ext.Msg.alert('overlayshow event');
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

