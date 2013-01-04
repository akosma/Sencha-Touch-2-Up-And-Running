Ext.Loader.setPath({
    'Ext': '../touch/src',
    'Chapter10Device': 'app',
    'AkoLib': '../AkoLib'
});

Ext.application({
    name: 'Chapter10Device',
    profiles: ['Phone', 'Tablet'],
    
    requires: [
        'Ext.MessageBox',
        'Ext.device.Connection',
        'Ext.device.Contacts',
        'Ext.device.Camera',
        'Ext.device.Orientation',
        'Ext.device.Notification',
        'Ext.device.Geolocation'
    ],

    views: ['IndexView', 'CameraDemo', 'NotificationsDemo', 'OrientationDemo', 
        'NetworkDemo', 'LocationDemo', 'CapabilitiesDemo', 'ContactsDemo'],
    stores: ['ItemStore'],
    models: ['AkoLib.model.Item'],
    controllers: ['CameraController'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        if (!Ext.device || !Ext.device.Device) {
            Ext.Msg.alert('Device only!', 'This demo is meant to be run inside of a device. Please follow the instructions in the book and compile this application as a native app using Sencha Cmd.');
        }
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
