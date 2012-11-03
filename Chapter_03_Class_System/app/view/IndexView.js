Ext.define('Chapter3ClassSystem.view.IndexView', {
    extend: 'Ext.dataview.NestedList',
    xtype: 'indexview',
    config: {
        id: 'indexView',
        store: {
            xtype: 'itemstore'
        },
        title: 'Demos'
    }
});

