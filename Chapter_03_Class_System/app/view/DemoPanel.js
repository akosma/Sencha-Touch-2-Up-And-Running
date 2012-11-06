Ext.define('Chapter3ClassSystem.view.DemoPanel', {
    extend: 'Ext.Panel',
    config: {
        scrollable: true,
        padding: '20'
    },

    initialize: function (component, eOpts) {
        var methods = this.getFunctions();
        var prefix = this.getPrefix();
        var instructions = this.getInstructions();

        this.add({
            html: instructions
        });

        // This code creates a button for each method specified in the
        // array above, dynamically, that calls a function in this view
        // of the same name, ending in "...Demo"
        Ext.Array.each(methods, function (item) {
            var methodName = prefix + '.' + item + '()';
            this.add({
                xtype: 'button',
                text: methodName,
                margin: '10',
                height: '44px',
                listeners: {
                    tap: function (sender, e, eOpts) {
                        var parent = this.getParent();
                        var method = item + 'Demo';
                        if (parent[method]) {
                            console.log('-----------------------------');
                            console.log('Demo: ' + methodName);
                            parent[method]();
                        }
                        else {
                            console.log('Demo ' + methodName + ' not implemented');
                        }
                    }
                }
            });
        }, this);
    },

    getPrefix: function () {
        // Subclasses should override this function, to return the
        // prefix used by each demo in the buttons created automatically
        // during initialize().
        return '';
    },
    
    getFunctions: function () {
        // Subclasses should override this function, to return the 
        // names of the methods that should be demoed
        return [];
    },

    getInstructions: function () {
        return 'Tap each button to execute a demo of the functions.<br>You can also see more information in the "console.log" statements in your browser console.';
    },
    
    showTitleText: function (title, text) {
        this.showText('<h1>' + title + '</h1><p>' + text + '</p>');
    },

    showText: function (text) {
        if (!this.overlay) {
            this.overlay = Ext.Viewport.add({
                xtype: 'panel',
                layout: 'card',
                modal: true,
                hideOnMaskTap: true,
                centered: true,
                width: 260,
                height: 300,
                hidden: true,
                padding: 10,
                scrollable: true
            });
        }
        this.overlay.setHtml(text);
        this.overlay.show();
    }
});

