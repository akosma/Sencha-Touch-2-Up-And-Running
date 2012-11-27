Ext.define('Chapter5DataViews.controller.phone.PhoneController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
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
        var screen = Ext.widget(screenName);
        var indexView = this.getIndexView();
        indexView.push(screen);
    }
});

