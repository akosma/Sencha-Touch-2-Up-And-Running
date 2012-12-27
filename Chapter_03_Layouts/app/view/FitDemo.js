Ext.define('Chapter3Layouts.view.FitDemo', {
    extend: 'Ext.Container',
    xtype: 'fitdemo',
    config: {
        defaults: {
            margin: 10
        },
        layout: {
            type: 'fit'
        },
        items: [{
            xtype: 'component',
            html: 'This component is set to fit',
            style: 'background-color: lightgrey'
        }]
    }
});

