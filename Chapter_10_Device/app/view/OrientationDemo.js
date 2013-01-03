Ext.define('Chapter10Device.view.OrientationDemo', {
    extend: 'Ext.Container',
    xtype: 'orientationdemo',
    config: {},
    initialize: function () {
        this.callParent(arguments);

        Ext.device.Orientation.on('orientation', function(e) {
            var alpha = Math.round(e.alpha);
            var beta = Math.round(e.beta);
            var gamma = Math.round(e.gamma);

            self.setHtml('Orientation: ' + [alpha, beta, gamma].join(", "));
        });
    }
});

