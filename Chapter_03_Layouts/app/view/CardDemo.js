Ext.define('Chapter3Layouts.view.CardDemo', {
    extend: 'Ext.Container',
    xtype: 'carddemo',
    config: {
        defaults: {
            margin: 10
        },
        layout: {
            type: 'card'
        },
        items: [{
            xtype: 'segmentedbutton',
            docked: 'top',
            items: [{
                text: 'First',
                pressed: true
            }, {
                text: 'Second'
            }, {
                text: 'Third'
            }],
            listeners: {
                toggle: function (segmentedbutton, button, isPressed, eOpts) {
                    if (isPressed) {
                        var container = segmentedbutton.getParent();
                        var selectedComponent = container.getComponent(button.getText());
                        container.setActiveItem(selectedComponent);
                    }
                }
            }
        }, {
            xtype: 'component',
            itemId: 'First',
            html: 'First component',
            style: 'background-color: pink'
        }, {
            xtype: 'component',
            itemId: 'Second',
            html: 'Second component',
            style: 'background-color: lightgrey'
        }, {
            xtype: 'component',
            itemId: 'Third',
            html: 'Third component',
            style: 'background-color: cyan'
        }]
    }
});

