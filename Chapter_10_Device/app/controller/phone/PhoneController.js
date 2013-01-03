Ext.define('Chapter10Device.controller.phone.PhoneController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            listView: 'indexview > #listView',
            indexView: 'indexview'
        },
        control: {
            listView: {
                itemsingletap: 'listViewItemTap' 
            }
        }
    },

    listViewItemTap: function(list, index, target, record, e, eOpts) {
        var screenName = record.get('screen');
        var text = record.get('text');
        var widget = Ext.widget(screenName, {
            title: text
        });
        var indexView = this.getIndexView();
        indexView.push(widget);
    }
});

