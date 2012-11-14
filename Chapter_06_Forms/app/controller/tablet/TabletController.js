Ext.define('Chapter6Forms.controller.tablet.TabletController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            rootView: '#rootView',
            indexView: '#indexView',
            samplePane: '#samplePane',
            titleToolbar: '#titleToolbar',
            showFormSamplesButton: 'button[action=showFormSamples]'
        },
        control: {
            indexView: {
                itemtap: 'indexViewItemTap' 
            },
            showFormSamplesButton: {
                tap: 'showFormSamples'
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
        var showFormSamplesButton = this.getShowFormSamplesButton();
        var o = obj.orientation;
        var rootView = this.getRootView();
        if (o === 'landscape') {
            rootView.insert(0, indexView);
            indexView.setHidden(false);
            showFormSamplesButton.setHidden(true);
        }
        else if (o === 'portrait') {
            indexView.setHidden(true);
            showFormSamplesButton.setHidden(false);
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
                hidden: true,
                items: [{
                    xtype: 'indexview'
                }]
            });
        }
    },

    showFormSamples: function (button, e, eOpts) {
        this.createOverlay();
        var showFormSamplesButton = this.getShowFormSamplesButton();
        this.overlay.showBy(showFormSamplesButton, 'tl-bc');
    },

    indexViewItemTap: function(nestedlist, list, index, target, record, e, eOpts) {
        var titleToolbar = this.getTitleToolbar();
        var text = record.get('text');
        titleToolbar.setTitle(text);

        var screenName = record.get('screen');
        if (!this.screens) {
            this.screens = {};
        }
        if (!this.screens[screenName]) {
            this.screens[screenName] = Ext.widget(screenName);
        }

        var mainPane = this.getSamplePane();
        mainPane.setActiveItem(this.screens[screenName]);

        if (this.overlay) {
            this.overlay.hide();
        }
    }
});

