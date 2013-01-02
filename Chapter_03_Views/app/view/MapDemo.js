Ext.define('Chapter3Views.view.MapDemo', {
    extend: 'Ext.Container',
    xtype: 'mapdemo',
    config: {
        layout: {
            type: 'card'
        },
        items: [{
            xtype: 'map',
            useCurrentLocation: false,
            mapOptions: {
                zoom: (Ext.os.is.Phone) ? 6 : 8,
                center: new google.maps.LatLng(46.801111, 8.226667)
            },
            listeners: {
                maprender: function(component, googleMap, eOpts) {
                    var store = Ext.getStore('citiesStore');
                    var markers = [];
                    store.each(function(city, index, length) {
                        var position = new google.maps.LatLng(city.get("latitude"), city.get("longitude"));
                        var marker = new google.maps.Marker({
                            position: position,
                            city: city
                        });
                        marker.setClickable(true);
                        markers.push(marker);

                        // Do not use the "click" event here!
                        // http://code.google.com/p/gmaps-api-issues/issues/detail?id=3148
                        google.maps.event.addListener(marker, 'mouseup', function() {
                            var city = this.city;
                            var content = '<span style="font-weight: bold">' + city.get('name') + '</span>';
                            if (!component.infoWindow) {
                                component.infoWindow = new google.maps.InfoWindow();
                            }
                            component.infoWindow.setContent(content);
                            component.infoWindow.open(googleMap, this);
                        });
                    });
                    var mcOptions = { gridSize: 50, maxZoom: 16 };
                    var markerCluster = new MarkerClusterer(googleMap, markers, mcOptions);
                }
            }
        }]
    }
});

