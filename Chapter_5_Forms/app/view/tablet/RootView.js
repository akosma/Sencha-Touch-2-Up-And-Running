Ext.define('Chapter5Forms.view.tablet.RootView', {
    extend: 'Ext.Container',
    xtype: 'rootview',
    config: {
        layout: 'hbox',
        items: [
            { 
            xtype: 'indexview',
            flex: 1
        }, { 
            xtype: 'formsample',
            flex: 2
        }]
    }
});

