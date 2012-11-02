Ext.define('Chapter5Forms.controller.tablet.TabletController', {
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
        var orientation = Ext.Viewport.getOrientation();
        this.handleOrientationChange({ orientation: orientation });
        Ext.Viewport.on('orientationchange', 'handleOrientationChange', this, { buffer: 50 });
    },

    handleOrientationChange: function (obj) {
        var indexView = this.getIndexView();
        var showFormSamplesButton = this.getShowFormSamplesButton();
        var orientation = obj.orientation;
        var rootView = this.getRootView();
        if (orientation === 'landscape') {
            rootView.insert(0, indexView);
            indexView.setHidden(false);
            showFormSamplesButton.setHidden(true);
        }
        else if (orientation === 'portrait') {
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
                showAnimation: {
                    type: 'popIn',
                    duration: 250,
                    easing: 'ease-out'
                },
                hideAnimation: {
                    type: 'popOut',
                    duration: 250,
                    easing: 'ease-out'
                },
                centered: true,
                width: 260,
                height: 400,
                scrollable: true,
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

        var screen = record.get('screen');
        var samplePane = this.getSamplePane();
        samplePane.setActiveItem({
            xtype: screen
        });

        if (this.overlay) {
            this.overlay.hide();
        }
    }
});

