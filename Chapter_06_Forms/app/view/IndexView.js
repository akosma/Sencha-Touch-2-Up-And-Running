Ext.define('Chapter5Forms.view.IndexView', {
    extend: 'Ext.dataview.NestedList',
    xtype: 'indexview',
    config: {
        id: 'indexView',
        store: {
            xtype: 'samplestore'
        },
        title: 'Form Demos',
        listeners: {
            back: function (nestedList, node, lastActiveList, detailCardActive, eOpts) {
                lastActiveList.deselectAll();
            }
        }
    }
});

