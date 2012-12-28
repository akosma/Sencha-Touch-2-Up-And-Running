/**
 * Basic class for creating a component similar to the
 * UISplitViewController in the iPad.
 *
 * This component requires two components to work: 
 *
 * - On the left side, the `masterView` usually contains a list of
 *   objects.
 * - On the right side, the `detailView` displays the details of the
 *   item selected on the `masterView`.
 *
 * To use it, include the `AkoLib` in your project:
 *
 *     Ext.Loader.setConfig({
 *         paths: {
 *             'AkoLib': '../AkoLib'
 *         }
 *     });
 *  
 * Then configure a new instance of it and add it to your viewport, typically
 * inside of the profile for tablets or desktop apps:
 *  
 *     Ext.Viewport.add({
 *         xtype: 'akosplitview',
 *         screenTitle: 'Universal App',
 *         menuButtonTitle: 'Menu',
 *         masterView: { 
 *             xtype: 'indexview'
 *         },
 *         detailView: {
 *             xtype: 'panel',
 *             html: 'Select an item in the menu'
 *         }
 *     });
 *
 */
Ext.define('AkoLib.view.SplitView', {
    extend: 'Ext.Container',
    xtype: 'akosplitview',
    config: {

        /**
         * @cfg {Object} [masterView=null]
         * The Component instance to be displayed on the left hand side
         * of the split view.
         */
        masterView: null,

        /**
         * @cfg {Object} [detailView=null]
         * The Component instance to be displayed on the right hand side
         * of the split view.
         */
        detailView: null,

        /**
         * @cfg {String} [screenTitle="Sample Split View"]
         * The default title shown when the split view is initialized.
         */
        screenTitle: 'Sample Split View',

        /**
         * @cfg {String} [menuButtonTitle="Menu"]
         * Text displayed in the button that shows the master view when
         * the component is in `collapsed` state.
         */
        menuButtonTitle: 'Menu',

        /**
         * @cfg {Array} [detailToolbarButtons=null]
         * An array of buttons that are added to the toolbar on top of
         * the detail component.
         */
        detailToolbarButtons: null,

        /**
         * @cfg {Boolean} [collapsesMasterView=true]
         * A flag that indicates whether the component can collapse
         * its master view or not.
         */
        collapsesMasterView: true,

        /**
         * @cfg {Boolean} [showToggleButton=false]
         * A flag specifying whether the 'toggle' button (allowing
         * manual collapse of the master view) is shown or not.
         */
        showToggleButton: false,

        /**
         * @cfg {Boolean} [collapsed=false]
         * A flag indicating whether the split view is shown collapsed
         * (true) or expanded (false) when the component is initialized.
         */
        collapsed: false,

        /**
         * @event beforemasterviewhide
         * Fires whenever the master view is about to be hidden
         * @param {AkoLib.view.SplitView} this The component instance
         */

        /**
         * @event masterviewhide
         * Fires whenever the master view has been hidden
         * @param {AkoLib.view.SplitView} this The component instance
         */
        
        /**
         * @event beforemasterviewshow
         * Fires whenever the master view is about to be shown
         * @param {AkoLib.view.SplitView} this The component instance
         */

        /**
         * @event masterviewshow
         * Fires whenever the master view has been shown
         * @param {AkoLib.view.SplitView} this The component instance
         */

        /**
         * @event beforeoverlayhide
         * Fires whenever the overlay view is about to be hidden
         * @param {AkoLib.view.SplitView} this The component instance
         */

        /**
         * @event overlayhide
         * Fires whenever the overlay view has been hidden
         * @param {AkoLib.view.SplitView} this The component instance
         */

        /**
         * @event beforeoverlayshow
         * Fires whenever the overlay view is about to be shown
         * @param {AkoLib.view.SplitView} this The component instance
         */

        /**
         * @event overlayshow
         * Fires whenever the overlay view has been shown
         * @param {AkoLib.view.SplitView} this The component instance
         */

        // Common configuration options
        itemId: 'splitView',
        layout: 'hbox',
        items: [{ 
            margin: '0 1 0 0',
            xtype: 'container',
            itemId: 'masterPanel',
            flex: 300,
            layout: 'fit',
            hideAnimation: 'slideOut',
            showAnimation: {
                type: 'slideIn',
                direction: 'right'
            }
        }, { 
            margin: '0 0 0 1',
            itemId: 'detailPanel',
            xtype: 'container',
            layout: 'fit',
            flex: 724,
            items: [{
                itemId: 'titleToolbar',
                title: '',
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    xtype: 'button',
                    itemId: 'toggleButton',
                    iconCls: 'arrow_left',
                    iconMask: true,
                    hidden: true
                }, {
                    xtype: 'button',
                    itemId: 'showMenuButton',
                    hideAnimation: 'fadeOut',
                    showAnimation: 'fadeIn',
                    hidden: true
                }]
            }, {
                xtype: 'container',
                itemId: 'contentPanel',
                layout: 'fit'
            }]
        }]
    },

    // INITIALIZER 

    initialize: function(){
        this.callParent(arguments);

        var o = Ext.Viewport.getOrientation();
        this.handleOrientationChange({ orientation: o });
        Ext.Viewport.onBefore('orientationchange', 'handleOnBeforeOrientationChange', this, { buffer: 50 });
        Ext.Viewport.on('orientationchange', 'handleOrientationChange', this, { buffer: 50 });

        this.getMasterPanel().add(this.getMasterView());
        this.getContentPanel().add(this.getDetailView());
        this.setTitle(this.getScreenTitle());

        var showMenuButton = this.getShowMenuButton();
        showMenuButton.setText(this.getMenuButtonTitle());
        showMenuButton.addListener('tap', function (button, e, eOpts) {
            this.getOverlayView().showBy(button, 'tl-bc');
        }, this);

        var toolbarButtons = this.getDetailToolbarButtons();
        if (toolbarButtons) {
            this.getTitleToolbar().add(toolbarButtons);
        }

        var toggleButton = this.getToggleButton();
        toggleButton.addListener('tap', function (button, e, eOpts) {
            this.toggle();
        }, this);
        toggleButton.setHidden(!this.getShowToggleButton() || !this.getCollapsesMasterView());
    },

    // PUBLIC METHODS

    /**
     * Sets the title of the current split view.
     * @param {String} title The new title for the split view.
     */
    setTitle: function (title) {
        var toolbar = this.getTitleToolbar();
        toolbar.setTitle(title);
    },

    /**
     * Sets the component to be displayed inside of the detail view.
     * @param {Ext.Component} component The component to be displayed.
     */
    displayComponent: function (component) {
        var contentPanel = this.getContentPanel();
        contentPanel.removeAll(false, false);
        contentPanel.add(component);
        this.hideOverlayView();
    },

    // EVENT HANDLERS

    handleOnBeforeOrientationChange: function () {
        if (this.getCollapsesMasterView()) {
            this.hideOverlayView();
        }
    },

    handleOrientationChange: function (obj) {
        if (this.getCollapsesMasterView()) {
            var o = obj.orientation;
            if (o === 'landscape') {
                this.showMasterView();
            }
            else if (o === 'portrait') {
                this.hideMasterView();
            }
        }
    },

    toggle: function () {
        if (this.getCollapsesMasterView()) {
            if (this.getCollapsed()) {
                this.showMasterView();
            }
            else {
                this.hideMasterView();
            }
        }
    },

    // PRIVATE METHODS

    /**
     * Expands the master view and shows it
     * @private
     */
    showMasterView: function () {
        this.fireEvent('beforemasterviewshow', this);
        this.getMasterPanel().show();
        this.getShowMenuButton().hide();
        this.getToggleButton().setIconCls('arrow_left');
        this.setCollapsed(false);
        this.fireEvent('masterviewshow', this);
    },

    /**
     * Collapses the master view and hides it
     * @private
     */
    hideMasterView: function () {
        this.fireEvent('beforemasterviewhide', this);
        this.getMasterPanel().hide();
        this.getShowMenuButton().show();
        this.getToggleButton().setIconCls('arrow_right');
        this.setCollapsed(true);
        this.fireEvent('masterviewhide', this);
    },

    /**
     * Lazy-loading method that returns a pointer to the overlay view
     * used to display the master view when the component is
     * `collapsed`.
     * @private
     */
    getOverlayView: function () {
        if (!this.overlayView) {
            this.overlayView = Ext.Viewport.add({
                xtype: 'panel',
                layout: 'card',
                modal: true,
                hideOnMaskTap: true,
                width: 300,
                height: 600,
                hidden: true,
                hideAnimation: 'fadeOut',
                showAnimation: 'fadeIn'
            });
            this.overlayView.addListener('show', function () {
                this.fireEvent('beforeoverlayshow', this);
                this.getOverlayView().add(this.getMasterView());
                this.fireEvent('overlayshow', this);
            }, this);
            this.overlayView.addListener('hide', function () {
                this.fireEvent('beforeoverlayhide', this);
                this.getMasterPanel().add(this.getMasterView());
                this.fireEvent('overlayhide', this);
            }, this);
        }
        return this.overlayView;
    },

    /**
     * Returns a pointer to the current master panel.
     * @private
     */
    getMasterPanel: function () {
        if (!this.masterPanel) {
            this.masterPanel = this.getComponent('masterPanel');
        }
        return this.masterPanel;
    },

    /**
     * Returns a reference to the current detail panel.
     * @private
     */
    getDetailPanel: function () {
        if (!this.detailPanel) {
            this.detailPanel = this.getComponent('detailPanel');
        }
        return this.detailPanel;
    },

    /**
     * Returns a pointer to the content panel, located inside of the
     * detail panel.
     * @private
     */
    getContentPanel: function () {
        if (!this.contentPanel) {
            this.contentPanel = this.getDetailPanel().getComponent('contentPanel');
        }
        return this.contentPanel;
    },

    /**
     * Returns a reference to the toolbar inside of the detail panel.
     * @private
     */
    getTitleToolbar: function () {
        if (!this.titleToolbar) {
            this.titleToolbar = this.getDetailPanel().getComponent('titleToolbar');
        }
        return this.titleToolbar;
    },

    /**
     * Returns a pointer to the button used to show the overlay view
     * when the component is `collapsed`.
     * @private
     */
    getShowMenuButton: function () {
        if (!this.showMenuButton) {
            this.showMenuButton = this.getTitleToolbar().getComponent('showMenuButton');
        }
        return this.showMenuButton;
    },

    /**
     * Returns a pointer to the button used to collapse the current
     * instance.
     * @private
     */
    getToggleButton: function () {
        if (!this.toggleButton) {
            this.toggleButton = this.getTitleToolbar().getComponent('toggleButton');
        }
        return this.toggleButton;
    },

    /**
     * Hides the overlay view, used to display the master view when the
     * component is `collapsed`.
     * @private
     */
    hideOverlayView: function () {
        this.getOverlayView().hide();
    }
});

