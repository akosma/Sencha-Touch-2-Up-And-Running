Ext.define('Chapter5DataViews.controller.phone.PhoneController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            listView: '#listView',
            navigationView: '#navigationView'
        },
        control: {
            listView: {
                itemtap: 'listViewItemTap' 
            },
            navigationView: {
                back: 'navigationViewBack'
            }
        }
    },

    listViewItemTap: function (listView, index, target, record, e, eOpts) {
        var screenName = record.get('screen');
        var screen = Ext.widget(screenName);
        var navigationView = this.getNavigationView();
        navigationView.push(screen);
    },

    navigationViewBack: function (navigationView, eOpts) {
        var list = this.getListView();
        list.deselectAll();
    }
});

