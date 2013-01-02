Ext.define('Chapter2ClassSystem.controller.phone.PhoneController', {
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
        this.getIndexView().push(Ext.widget(screenName, {
            title: text
        }));
    }
});

