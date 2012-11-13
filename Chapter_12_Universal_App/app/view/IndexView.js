Ext.define('Chapter12Universal.view.IndexView', {
    extend: 'Ext.dataview.NestedList',
    xtype: 'indexview',
    config: {
        id: 'indexView',
        store: {
            xtype: 'itemstore'
        },
        title: 'Items',
        listeners: {
            back: function (nestedList, node, lastActiveList, detailCardActive, eOpts) {
                lastActiveList.deselectAll();
            }
        }
    }
});

