Ext.define('Chapter5Forms.view.tablet.RootView', {
    extend: 'Ext.Container',
    xtype: 'rootview',
    config: {
        id: 'rootView',
        layout: 'hbox',
        items: [{ 
            margin: '0 1 0 0',
            xtype: 'indexview',
            flex: 1
        }, { 
            margin: '0 0 0 1',
            id: 'samplePane',
            xtype: 'container',
            layout: 'card',
            flex: 3,
            items: [{
                id: 'titleToolbar',
                title: 'Form Samples',
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Forms',
                    action: 'showFormSamples'
                }]
            }, {
                html: 'Choose a form sample from the menu'
            }]
        }]
    }
});

