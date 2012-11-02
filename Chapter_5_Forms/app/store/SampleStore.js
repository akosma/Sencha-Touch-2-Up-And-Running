Ext.define('Chapter5Forms.store.SampleStore', {
    extend: 'Ext.data.TreeStore',
    xtype: 'samplestore',
    config: {
        model: 'Chapter5Forms.model.Sample',
        defaultRootProperty: 'items',
        data: {
            items: [
                { text: 'Checkboxes', screen: 'checkboxsample', leaf: true }
            ]
        }
    }
});

