Ext.define('Chapter10Device.view.NotificationsDemo', {
    extend: 'Ext.Container',
    xtype: 'notificationsdemo',
    config: {
        defaults: {
            margin: 10
        },
        items: [{
            xtype: 'label',
            html: 'Touch a button below',
            itemId: 'mainLabel'
        }, {
            xtype: 'button',
            text: 'Native notification',
            listeners: {
                tap: function (button, e, eOpts) {
                    Ext.device.Notification.show({
                        title: 'Native notification',
                        message: 'This is a native notification',
                        buttons: ['Red', 'Yellow', 'Green'],

                        callback: function(answer) {
                            button.getParent().down('#mainLabel').setHtml('Touched button: ' + answer);
                        }
                    }); 
                }
            }
        }, {
            xtype: 'button',
            text: 'Vibrate',
            listeners: {
                tap: function (button, e, eOpts) {
                    Ext.device.Notification.vibrate();
                    button.getParent().down('#mainLabel').setHtml('Vibrated!');
                }
            }
        }]
    }
});

