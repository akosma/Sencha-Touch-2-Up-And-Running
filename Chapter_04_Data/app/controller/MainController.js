Ext.define('Chapter5Data.controller.MainController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            refreshButton: 'button[action=refresh]',
            switchFormatSegmentedButton: 'segmentedbutton[action=switchformat]'
        },
        control: {
            refreshButton: {
                tap: 'refresh' 
            },
            switchFormatSegmentedButton: {
                toggle: 'switchFormat'
            }
        }
    },

    refresh: function (button, e, eOpts) {
        var store = Ext.getStore('PeopleStore');
        store.load();
    },

    switchFormat: function (segmentedButton, button, isPressed, eOpts) {
        var store = Ext.getStore('PeopleStore');
        if (isPressed) {
            var format = button.getText();
            var newProxy = null;
            if (format === 'JSON') {
                newProxy = {
                    type: 'ajax',
                    url : 'Server/index.php?format=json'
                };
            }
            else if (format === 'XML') {
                newProxy = {
                    type: 'ajax',
                    url : 'Server/index.php?format=xml',
                    reader: {
                        type: 'xml',
                        rootProperty: 'data',
                        record: 'person'
                    }
                };
            }
            store.setProxy(newProxy);
            store.load();
        }
    }
});

