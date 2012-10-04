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
    },
    initialize: function () {
        console.log('initialize rootview');
        Ext.Viewport.on('orientationchange', 'handleOrientationChange', this, { buffer: 50 });
    },
    handleOrientationChange: function () {
        console.log('orientation change');
    }
});

