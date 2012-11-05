Ext.define('Chapter3ClassSystem.view.DemoPanel', {
    extend: 'Ext.Panel',
    config: {
        scrollable: true,
        padding: '20'
    },

    initialize: function (component, eOpts) {
        var methods = this.getFunctions();

        this.add({
            html: 'Tap each button to execute a demo of the functions.<br>You can also see more information in the "console.log" statements in your browser console.'
        });

        // This code creates a button for each method specified in the
        // array above, dynamically, that calls a function in this view
        // of the same name, ending in "...Demo"
        Ext.Array.each(methods, function (item) {
            var methodName = 'Ext.Array.' + item + '()';
            this.add({
                xtype: 'button',
                text: methodName,
                margin: '10',
                height: '44px',
                listeners: {
                    tap: function (sender, e, eOpts) {
                        console.log('-----------------------------');
                        console.log('Demo: ' + methodName);
                        this.getParent()[item + 'Demo']();
                    }
                }
            });
        }, this);
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
                hidden: true
            });
        }
        this.overlay.setHtml(text);
        this.overlay.show();
    }
});

