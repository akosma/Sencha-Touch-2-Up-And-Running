Ext.define('Chapter3Views.view.ActionSheetDemo', {
    extend: 'Ext.Container',
    xtype: 'actionsheetdemo',
    config: {
        defaults: {
            margin: 20
        },
        items: [{
            xtype: 'label',
            html: 'Touch the button to show an example of an action sheet'
        }, {
            xtype: 'button',
            text: 'Touch to open action sheet',
            itemId: 'openButton',
            listeners: {
                tap: function (button, e, eOpts) {
                    if (!button.sheet) {
                        button.sheet = Ext.widget('actionsheet', {
                            items: [{
                                text: 'Delete',
                                listeners: {
                                    tap: function (btn, e, eOpts) {
                                        button.sheet.hide();
                                    }
                                }
                            }, {
                                text: 'Approve',
                                ui: 'confirm',
                                listeners: {
                                    tap: function (btn, e, eOpts) {
                                        button.sheet.hide();
                                    }
                                }
                            }, {
                                text: 'Cancel',
                                ui: 'decline',
                                listeners: {
                                    tap: function (btn, e, eOpts) {
                                        button.sheet.hide();
                                    }
                                }
                            }]
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

