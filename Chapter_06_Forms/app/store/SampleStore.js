Ext.define('Chapter6Forms.store.SampleStore', {
    extend: 'Ext.data.TreeStore',
    xtype: 'samplestore',
    config: {
        model: 'Chapter6Forms.model.Sample',
        defaultRootProperty: 'items',
        data: {
            items: [
                { text: 'Checkboxes', screen: 'checkboxsample', leaf: true },
                { text: 'Radio Buttons', screen: 'radiobuttonsample', leaf: true },
                { text: 'Text Fields', screen: 'textfieldsample', leaf: true },
                { text: 'Slider and Toggle', screen: 'slidertogglesample', leaf: true }
            ]
        }
    }
});

