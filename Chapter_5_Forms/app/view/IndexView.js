Ext.define('Chapter5Forms.view.IndexView', {
    extend: 'Ext.dataview.NestedList',
    xtype: 'indexview',
    config: {
        id: 'indexView',
        store: {
            xtype: 'samplestore'
        },
        title: 'Forms'
    }
});

