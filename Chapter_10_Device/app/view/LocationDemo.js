Ext.define('Chapter10Device.view.LocationDemo', {
    extend: 'Ext.Container',
    xtype: 'locationdemo',
    config: {},
    initialize: function () {
        this.callParent(arguments);
        var self = this;

        Ext.device.Geolocation.getCurrentPosition({
            success: function(position) {
                self.showPosition(position.coords);
            },
            failure: function() {
                console.log('Could not get the current position');
            }
        });
        
        Ext.device.Geolocation.watchPosition({
            frequency: 5000,
            success: function(position) {
                self.showPosition(position.coords);
            },
            failure: function() {
                console.log('Could not watch the current position');
            }
        });
    },
    showPosition: function (position) {
        var text = [
            'Accuracy: ' + position.accuracy,
            'Altitude: ' + position.altitude,
            'Altitude accuracy: ' + position.altitudeAccuracy,
            'Heading: ' + position.heading,
            'Latitude: ' + position.latitude,
            'Longitude: ' + position.longitude,
            'Speed: ' + position.speed
        ];
        this.setHtml(text.join('<br>'));
    }
});

