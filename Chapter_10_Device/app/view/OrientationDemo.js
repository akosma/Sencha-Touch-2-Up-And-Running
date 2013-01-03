Ext.define('Chapter10Device.view.OrientationDemo', {
    extend: 'Ext.Container',
    xtype: 'orientationdemo',
    config: {
        html: 'Move this device!'
    },
    initialize: function () {
        this.callParent(arguments);

        var self = this;

        Ext.device.Orientation.on('orientationchange', function(e) {
            var alpha = Math.round(e.alpha);
            var beta = Math.round(e.beta);
            var gamma = Math.round(e.gamma);
            var text = [alpha, beta, gamma].join(", ");

            console.log('Orientation changed: ' + text);
            self.setHtml('Orientation changed: ' + text);
        });
    }
});

