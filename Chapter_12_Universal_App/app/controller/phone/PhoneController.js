Ext.define('Chapter12Universal.controller.phone.PhoneController', {
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
        var text = record.get('text');
        this.getIndexView().push(Ext.widget('panel', {
            html: text,
            title: text
        }));
    }
});

