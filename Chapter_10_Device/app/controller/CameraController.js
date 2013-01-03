Ext.define('Chapter10Device.controller.CameraController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            loadCameraButton: 'button[action=loadCamera]',
            loadLibraryButton: 'button[action=loadLibrary]',
            image: '#selectedImage'
        },
        control: {
            loadCameraButton: {
                tap: 'loadCamera'
            },
            loadLibraryButton: {
                tap: 'loadLibrary'
            }
        }
    },

    loadCamera: function (button, e, eOpts) {
        var self = this;

        Ext.device.Camera.capture({
            source: 'camera',
            destination: 'file',

            success: function(url) {
                self.getImage().setSrc(url);
            }
        }); 
    },


    loadLibrary: function (button, e, eOpts) {
        var self = this;
        
        Ext.device.Camera.capture({
            source: 'library',
            destination: 'file',

            success: function(url) {
                self.getImage().setSrc(url);
            }
        }); 
    }
});

