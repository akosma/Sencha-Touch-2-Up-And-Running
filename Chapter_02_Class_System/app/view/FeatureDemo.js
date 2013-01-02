Ext.define('Chapter2ClassSystem.view.FeatureDemo', {
    extend: 'Chapter2ClassSystem.view.DemoPanel',
    xtype: 'featuredemo',

    getPrefix: function () {
        return 'Ext.feature';
    },
    
    getFunctions: function () {
        return [ 'has' ];
    },

    hasDemo: function () {
        var key = null;
        var output = [];
        var value = false;
        var text = '';
        console.log('Available features:');
        for (key in Ext.feature.has) {
            value = Ext.feature.has[key];
            text = key + ': ' + value;
            console.log(text);
            output.push(text);
        }
        this.showTitleText('Available features', output.join('<br>'));
    }
});


