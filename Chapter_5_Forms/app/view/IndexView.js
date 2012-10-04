Ext.define('Chapter5Forms.view.IndexView', {
    extend: 'Ext.dataview.List',
    xtype: 'indexview',
    config: {
        data: [{ 
            title: 'Checkboxes'
        }],
        items: [{
            xtype: 'titlebar',
            docked: 'top',
            title: 'Forms'
        }],
        itemTpl: '{title}',
        ui: 'round',
        listeners: {
            itemtap: function(list, index, target, record, e, eOpts) {
                location.href = record.get('url');
            }
        }
    }
});

