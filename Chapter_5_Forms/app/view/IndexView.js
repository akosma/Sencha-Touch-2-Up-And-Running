Ext.define('Chapter5Forms.view.IndexView', {
    extend: 'Ext.dataview.NestedList',
    xtype: 'indexview',
    config: {
        store: {
            xtype: 'samplestore'
        },
        title: 'Forms',
        listeners: {
            itemtap: function(nestedlist, list, index, target, record, e, eOpts) {
                var screen = record.get('screen');
                nestedlist.setDetailCard({
                    xtype: screen
                });
            }
        }
    }
});

