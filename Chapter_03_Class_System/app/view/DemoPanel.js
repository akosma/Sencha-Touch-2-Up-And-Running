Ext.define('Chapter3ClassSystem.view.DemoPanel', {
    extend: 'Ext.Panel',
    config: {
        scrollable: true,
        padding: '20'
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

