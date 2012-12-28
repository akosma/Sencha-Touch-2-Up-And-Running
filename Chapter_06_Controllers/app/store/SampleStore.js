Ext.define('Chapter6Controllers.store.SampleStore', {
    extend: 'Ext.data.Store',
    xtype: 'samplestore',
    config: {
        storeId: 'ItemStore',
        model: 'AkoLib.model.Item',
        data: [
            { text: 'Checkboxes', screen: 'checkboxsample' },
            { text: 'Radio Buttons', screen: 'radiobuttonsample' },
            { text: 'Text Fields', screen: 'textfieldsample' },
            { text: 'Slider and Toggle', screen: 'slidertogglesample' }
        ]
    }
});

