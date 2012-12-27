Ext.define('Chapter3ClassSystem.view.InflectorDemo', {
    extend: 'Chapter3ClassSystem.view.DemoPanel',
    xtype: 'inflectordemo',
    
    getPrefix: function () {
        return 'Ext.util.Inflector';
    },

    getFunctions: function () {
        return [ 'isTransnumeral', 'ordinalize', 'pluralize', 'singularize' ];
    },

    isTransnumeralDemo: function () {
        var words = ['fish', 'people', 'gents', 'women', 'happiness', 'sheep', 'code'];
        var results = [];
        Ext.iterate(words, function (item) {
            var txt = [item, ' is transnumeral: ', Ext.util.Inflector.isTransnumeral(item)].join('');
            console.log(txt);
            results.push(txt);
        }, this);
        this.showTitleText('isTransnumeral() demo', results.join('<br>'));
    },
    
    ordinalizeDemo: function () {
        var words = [1, 2, 3, 4, 5, 345, 456, 822, 21, 80];
        var results = [];
        Ext.iterate(words, function (item) {
            var txt = Ext.util.Inflector.ordinalize(item);
            console.log(txt);
            results.push(txt);
        }, this);
        this.showTitleText('ordinalize() demo', results.join('<br>'));
    },

    pluralizeDemo: function () {
        var words = ['person', 'country', 'mouse', 'thing', 'boom'];
        var results = [];
        Ext.iterate(words, function (item) {
            var txt = ['One', item, 'many', Ext.util.Inflector.pluralize(item)].join(' ');
            console.log(txt);
            results.push(txt);
        }, this);
        this.showTitleText('pluralize() demo', results.join('<br>'));
    },

    singularizeDemo: function () {
        var words = ['people', 'countries', 'mice', 'things', 'booms'];
        var results = [];
        Ext.iterate(words, function (item) {
            var txt = ['Many', item, 'one', Ext.util.Inflector.singularize(item)].join(' ');
            console.log(txt);
            results.push(txt);
        }, this);
        this.showTitleText('singularize() demo', results.join('<br>'));
    }
});

