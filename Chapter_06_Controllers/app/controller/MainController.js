Ext.define('Chapter6Controllers.controller.MainController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            indexView: 'indexview',
            listView: 'indexview > #listView'
        },
        control: {
            listView: {
                itemsingletap: 'listViewItemTap',
                itemdoubletap: 'listViewDoubleTap'
            },
            indexView: {
                whatever: 'whateverHandler'
            }
        }
    },
    listViewItemTap: function(list, index, target, record, e, eOpts) {
        console.log('list item single tap handler: ' + record.get('text'));
    },
    listViewDoubleTap: function (list, index, target, record, e, eOpts) {
        console.log('BOOM: list item double tap handler!');
    },
    whateverHandler: function (view) {
        console.log('This is an event handler for a custom event, called "whatever"');
    }
});

