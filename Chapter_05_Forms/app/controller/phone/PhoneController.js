Ext.define('Chapter5Forms.controller.phone.PhoneController', {
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
        var screenName = record.get('screen');
        if (!this.screens) {
            this.screens = {};
        }
        if (!this.screens[screenName]) {
            this.screens[screenName] = Ext.createByAlias('widget.' + screenName);
        }
        nestedlist.setDetailCard(this.screens[screenName]);
    }
});

