Ext.define('Chapter6Controllers.view.IndexView', {
    extend: 'Ext.navigation.View',
    xtype: 'indexview',
    config: {
        items: [{
            title: 'Controllers',
            xtype: 'list',
            itemId: 'listView',
            store: 'ItemStore',
            itemTpl: '{text}',
            listeners: {
                itemtap: function(list, index, target, record, e, eOpts) {
                    list.getParent().fireEvent('whatever');
                }
            }
        }]
    }
});

