Ext.define('Chapter3ClassSystem.controller.phone.PhoneController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            indexView: '#indexView'
        },
        control: {
            indexView: {
                itemtap: 'indexViewItemTap' 
            }
        }
    },

    indexViewItemTap: function(nestedlist, list, index, target, record, e, eOpts) {
        var screen = record.get('screen');
        nestedlist.setDetailCard({
            xtype: screen
        });
    }
});

