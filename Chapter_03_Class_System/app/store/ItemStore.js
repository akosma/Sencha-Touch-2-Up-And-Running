Ext.define('Chapter3ClassSystem.store.ItemStore', {
    extend: 'Ext.data.Store',
    xtype: 'itemstore',
    config: {
        model: 'AkoLib.model.Item',
        storeId: 'ItemStore',
        data: [
            { text: 'Array', screen: 'arraydemo' },
            { text: 'Date Extras', screen: 'datesdemo' },
            { text: 'Delayed Task', screen: 'delayedtaskdemo' },
            { text: 'DOM Helper', screen: 'domhelperdemo' },
            { text: 'DOM Query', screen: 'domquerydemo' },
            { text: 'Ext Object', screen: 'extdemo' },
            { text: 'Feature Detection', screen: 'featuredemo' },
            { text: 'Function', screen: 'functiondemo' },
            { text: 'HashMap', screen: 'hashmapdemo' },
            { text: 'Inflector', screen: 'inflectordemo' },
            { text: 'JSON', screen: 'jsondemo' },
            { text: 'Logger', screen: 'loggerdemo' },
            { text: 'Number', screen: 'numberdemo' },
            { text: 'Object', screen: 'objectdemo' },
            { text: 'Observable Mixin', screen: 'obsdemo' },
            { text: 'String', screen: 'stringdemo' },
            { text: 'Version', screen: 'versiondemo' }
        ]
    }
});

