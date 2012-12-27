Ext.define('Chapter6Forms.controller.phone.PhoneController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
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
        var screenName = record.get('screen');
        var text = record.get('text');
        var widget = Ext.widget(screenName, {
            title: text
        });
        var indexView = this.getIndexView();
        indexView.push(widget);
    }
});

