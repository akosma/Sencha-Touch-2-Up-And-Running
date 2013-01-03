Ext.define('Chapter10Device.view.NetworkDemo', {
    extend: 'Ext.Container',
    xtype: 'networkdemo',
    config: {},
    initialize: function () {
        this.callParent(arguments);

        if (Ext.device.Connection.isOnline()) {
            this.setHtml('Connected (' + Ext.device.Connection.getType() + ')');
        } else {
            this.setHtml('Disconnected');
        }
    }
});

