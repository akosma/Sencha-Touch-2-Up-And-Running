Ext.define('Chapter5Forms.view.tablet.RootView', {
    extend: 'Ext.Container',
    xtype: 'rootview',
    config: {
        id: 'rootView',
        layout: 'hbox',
        items: [{ 
            xtype: 'indexview',
            flex: 1
        }, { 
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

