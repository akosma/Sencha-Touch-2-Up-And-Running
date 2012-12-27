Ext.define('Chapter3Layouts.view.DockingDemo', {
    extend: 'Ext.Container',
    xtype: 'dockingdemo',
    config: {
        defaults: {
            margin: 5
        },
        layout: {
            type: 'fit'
        },
        items: [{
            xtype: 'component',
            docked: 'top',
            html: 'Docking: "top"',
            style: 'background-color: pink'
        }, {
            xtype: 'component',
            docked: 'left',
            html: '"left"',
            style: 'background-color: lightblue'
        }, {
            xtype: 'component',
            docked: 'right',
            html: '"right"',
            style: 'background-color: lightgreen'
        }, {
            xtype: 'component',
            docked: 'bottom',
            html: 'Docking: "bottom"',
            style: 'background-color: cyan'
        }, {
            xtype: 'component',
            html: 'Centered',
            style: 'background-color: lightgrey'
        }]
    }
});

