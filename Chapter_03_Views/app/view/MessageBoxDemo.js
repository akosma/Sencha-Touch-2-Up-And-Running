Ext.define('Chapter4Views.view.MessageBoxDemo', {
    extend: 'Ext.Panel',
    xtype: 'messageboxdemo',
    config: {
        defaults: {
            margin: 20
        },
        items: [{
            xtype: 'label',
            html: 'Panels can appear floating over other components.'
        }, {
            xtype: 'button',
            text: 'alert()',
            itemId: 'alertButton',
            listeners: {
                tap: function (button, e, eOpts) {
                    Ext.Msg.alert('alert()', 'This is an alert box');
                }
            }
        }, {
            xtype: 'button',
            text: 'confirm()',
            itemId: 'confirmButton',
            listeners: {
                tap: function (button, e, eOpts) {
                    Ext.Msg.confirm('confirm()', 'This is a confirm dialog', function (answer) {
                        Ext.Msg.alert('Answer to confirm()', 'You said ' + answer);
                        console.log('Answer to confirm(): ' + answer);
                    }, this);
                }
            }
        }, {
            xtype: 'button',
            text: 'prompt()',
            itemId: 'promptButton',
            listeners: {
                tap: function (button, e, eOpts) {
                    Ext.Msg.prompt('prompt()', 'This is a prompt dialog', function (answer, text) {
                        Ext.Msg.alert('Answer to prompt()', 'You said "' + text + '"');
                        console.log('Answer to prompt(): ' + text);
                    }, this);
                }
            }
        }]
    },
    initialize: function () {
        var button = this.getComponent('alertButton');
        var task = Ext.create('Ext.util.DelayedTask', function() {
            button.fireEvent('tap', button);
        });

        task.delay(750);
    }
});

