Ext.define('Chapter5DataViews.controller.tablet.TabletController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            rootView: '#rootView',
            listView: '#listView',
            mainPane: '#mainPane',
            titleToolbar: '#titleToolbar',
            showMenuButton: 'button[action=showMenu]',
            navigationView: '#navigationView'
        },
        control: {
            listView: {
                itemtap: 'listViewItemTap' 
            },
            showMenuButton: {
                tap: 'showMenu'
            }
        }
    },

    launch: function () {
        var o = Ext.Viewport.getOrientation();
        this.handleOrientationChange({ orientation: o });
        Ext.Viewport.onBefore('orientationchange', 'handleOnBeforeOrientationChange', this, { buffer: 50 });
        Ext.Viewport.on('orientationchange', 'handleOrientationChange', this, { buffer: 50 });
    },

    handleOnBeforeOrientationChange: function () {
        if (this.overlay) {
            this.overlay.hide();
        }
    },

    handleOrientationChange: function (obj) {
        var navigationView = this.getNavigationView();
        var showMenuButton = this.getShowMenuButton();
        var o = obj.orientation;
        var rootView = this.getRootView();
        if (o === 'landscape') {
            navigationView.setHidden(false);
            showMenuButton.setHidden(true);
        }
        else if (o === 'portrait') {
            navigationView.setHidden(true);
            showMenuButton.setHidden(false);
        }
    },

    createOverlay: function () {
        if (!this.overlay) {
            this.overlay = Ext.Viewport.add({
                xtype: 'panel',
                layout: 'card',
                modal: true,
                hideOnMaskTap: true,
                width: 340,
                height: 600,
                hidden: true
            });
            this.overlay.addListener('show', function () {
                this.overlay.add(this.getNavigationView());
            }, this);
            this.overlay.addListener('hide', function () {
                this.getRootView().insert(0, this.getNavigationView());
            }, this);
        }
    },

    showMenu: function (button, e, eOpts) {
        this.createOverlay();
        var showMenuButton = this.getShowMenuButton();
        this.overlay.showBy(showMenuButton, 'tl-bc');
    },

    listViewItemTap: function (listView, index, target, record, e, eOpts) {
        var screenName = record.get('screen');

        if (!this.screens) {
            this.screens = {};
        }
        if (!this.screens[screenName]) {
            this.screens[screenName] = Ext.widget(screenName);
        }

        var screen = this.screens[screenName];

        var mainPane = this.getMainPane();
        mainPane.setActiveItem(screen);
        var title = screen.getTitle();
        this.getTitleToolbar().setTitle(title);

        if (this.overlay) {
            this.overlay.hide();
        }
    }
});

