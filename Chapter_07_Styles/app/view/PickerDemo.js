Ext.define('Chapter7Styles.view.PickerDemo', {
    extend: 'Ext.Panel',
    xtype: 'pickerdemo',
    config: {
        defaults: {
            margin: 20
        },
        items: [{
            xtype: 'label',
            html: 'Touch the button to show an example of a picker'
        }, {
            xtype: 'button',
            text: 'Touch to show picker',
            itemId: 'openButton',
            listeners: {
                tap: function (button, e, eOpts) {
                    if (!button.picker) {
                        button.picker = Ext.widget('picker', {
                            slots: [{
                                name: 'first_name',
                                title: 'First name',
                                data: [{
                                    text: 'John',
                                    value: 'john'
                                }, {
                                    text: 'James',
                                    value: 'james'   
                                }, {
                                    text: 'Paul',
                                    value: 'paul'   
                                }, {
                                    text: 'Michael',
                                    value: 'michael'   
                                }]
                            }, {
                                name: 'last_name',
                                title: 'Last name',
                                data: [{
                                    text: 'Smith',
                                    value: 'smith'
                                }, {
                                    text: 'Raymond',
                                    value: 'raymond'
                                }, {
                                    text: 'Graham',
                                    value: 'graham'
                                }, {
                                    text: 'Fowler',
                                    value: 'fowler'
                                }]
                            }],
                            listeners: {
                                cancel: function (picker, opts) {
                                    Ext.Msg.alert('cancel', 'Picker has been canceled');
                                },
                                change: function (picker, value, opts) {
                                    Ext.Msg.alert('chance', 'Picker has value: ' + Ext.JSON.encode(value));
                                }
                            }
                        });
                        Ext.Viewport.add(button.picker);
                    }
                    button.picker.show();
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

