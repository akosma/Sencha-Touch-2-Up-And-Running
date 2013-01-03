Ext.define('Chapter10Device.view.LocationDemo', {
    extend: 'Ext.Container',
    xtype: 'locationdemo',
    config: {
        layout: 'vbox',
        items: [{
            xtype: 'container',
            html: 'Getting location... please wait...',
            flex: 1,
            itemId: 'dataLabel',
            scrollable: true
        }, {
            xtype: 'image',
            src: '',
            itemId: 'staticMapImage',
            flex: 2
        }]
    },

    initialize: function () {
        this.callParent(arguments);
        var self = this;

        Ext.device.Geolocation.getCurrentPosition({
            success: function(position) {
                self.showPosition(position.coords);
            },
            failure: function() {
                self.showError();
            }
        });
        
        Ext.device.Geolocation.watchPosition({
            frequency: 5000,
            success: function(position) {
                self.showPosition(position.coords);
            },
            failure: function() {
                self.showError();
            }
        });
    },

    showPosition: function (position) {
        var label = this.down('#dataLabel');
        var image = this.down('#staticMapImage');
        var text = [
            'Accuracy: ' + position.accuracy,
            'Altitude: ' + position.altitude,
            'Altitude accuracy: ' + position.altitudeAccuracy,
            'Heading: ' + position.heading,
            'Latitude: ' + position.latitude,
            'Longitude: ' + position.longitude,
            'Speed: ' + position.speed
        ];
        label.setHtml(text.join('<br>'));

        // Using the Google Static Maps API
        // https://developers.google.com/maps/documentation/staticmaps/
        image.setSrc('http://maps.googleapis.com/maps/api/staticmap?center=' + position.latitude + ',' + position.longitude + '&zoom=12&size=300x300&sensor=true&key=AIzaSyCgwmb4EmL7RBJJhqHVjd-9myB4Zspbnos');
    },

    showError: function () {
        var label = this.down('#dataLabel');
        label.setHtml('Could not retrieve location');
    }
});

