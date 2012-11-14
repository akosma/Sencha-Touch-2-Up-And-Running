Ext.define('Chapter5Data.store.ItemStore', {
    extend: 'Ext.data.TreeStore',
    xtype: 'itemstore',
    config: {
        model: 'Chapter5Data.model.Item',
        defaultRootProperty: 'items',
        data: {
            items: [
                { text: 'First item', screen: 'firstitem', leaf: true },
                { text: 'Second item', screen: 'seconditem', leaf: true },
                { text: 'Third item', screen: 'thirditem', leaf: true }
            ]
        }
    }
});

