Ext.define('Chapter3ClassSystem.view.NumberDemo', {
    extend: 'Chapter3ClassSystem.view.DemoPanel',
    xtype: 'numberdemo',
    
    getPrefix: function () {
        return 'Ext.Number';
    },

    getFunctions: function () {
        return [ 'constrain', 'from', 'snap', 'toFixed' ];
    },

    constrainDemo: function () {
        var constrained = Ext.Number.constrain(234, 0, 6030);
        var txt = 'Constrained value: ' + constrained;
        console.log(txt);
        this.showTitleText('constrain() demo', txt);
    },

    fromDemo: function () {
        var num = Ext.Number.from('4535', 1111);
        var txt = 'Retrieved value: ' + num;
        console.log(txt);
        this.showTitleText('from() demo', txt);
    },

    snapDemo: function () {
        var num = Ext.Number.snap(223, 100, 0, 1000);
        var txt = 'Snapped value: ' + num;
        console.log(txt);
        this.showTitleText('snap() demo', txt);
    },

    toFixedDemo: function () {
        var num = Ext.Number.toFixed(243.54234534, 2);
        var txt = 'Fixed value: ' + num;
        console.log(txt);
        this.showTitleText('toFixed() demo', txt);
    }
});

