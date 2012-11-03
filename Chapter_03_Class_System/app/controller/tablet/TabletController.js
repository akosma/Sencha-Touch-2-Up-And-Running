Ext.define('Chapter3ClassSystem.controller.tablet.TabletController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            rootView: '#rootView',
            indexView: '#indexView',
            mainPane: '#mainPane',
            titleToolbar: '#titleToolbar',
            showMenuButton: 'button[action=showMenu]'
        },
        control: {
            indexView: {
                itemtap: 'indexViewItemTap' 
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
        var indexView = this.getIndexView();
        var showMenuButton = this.getShowMenuButton();
        var o = obj.orientation;
        var rootView = this.getRootView();
        if (o === 'landscape') {
            rootView.insert(0, indexView);
            indexView.setHidden(false);
            showMenuButton.setHidden(true);
        }
        else if (o === 'portrait') {
            indexView.setHidden(true);
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
                centered: true,
                width: 340,
                height: 600,
                hidden: true,
                items: [{
                    xtype: 'indexview'
                }]
            });
        }
    },

    showMenu: function (button, e, eOpts) {
        this.createOverlay();
        var showMenuButton = this.getShowMenuButton();
        this.overlay.showBy(showMenuButton, 'tl-bc');
    },

    indexViewItemTap: function(nestedlist, list, index, target, record, e, eOpts) {
        var titleToolbar = this.getTitleToolbar();
        var text = record.get('text');
        titleToolbar.setTitle(text);

        var screen = record.get('screen');
        var mainPane = this.getMainPane();
        mainPane.setActiveItem({
            xtype: screen
        });

        if (this.overlay) {
            this.overlay.hide();
        }
    }
});

