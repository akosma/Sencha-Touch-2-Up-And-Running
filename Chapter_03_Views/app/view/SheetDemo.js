Ext.define('Chapter3Views.view.SheetDemo', {
    extend: 'Ext.Container',
    xtype: 'sheetdemo',
    config: {
        defaults: {
            margin: 20
        },
        items: [{
            xtype: 'label',
            html: 'Touch the button to show an example of a sheet'
        }, {
            xtype: 'button',
            text: 'Touch to show sheet',
            itemId: 'openButton',
            listeners: {
                tap: function (button, e, eOpts) {
                    if (!button.sheet) {
                        button.sheet = Ext.widget('sheet', {
                            html: 'Some text inside of the sheet',
                            style: 'color: white; font-weight: bold',
                            stretchX: true,
                            hideOnMaskTap: true
                        });
                        Ext.Viewport.add(button.sheet);
                    }
                    button.sheet.show();
                }
            }
        }]
    },
    initialize: function () {
        var button = this.getComponent('openButton');
        var task = Ext.create('Ext.util.DelayedTask', function() {
            button.fireEvent('tap', button);
        });

        task.delay(750);
    }
});

