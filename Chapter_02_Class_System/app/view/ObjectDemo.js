Ext.define('Chapter3ClassSystem.view.ObjectDemo', {
    extend: 'Chapter3ClassSystem.view.DemoPanel',
    xtype: 'objectdemo',

    getPrefix: function () {
        return 'Ext.Object';
    },

    getFunctions: function () {
        return [ 'each', 'fromQueryString', 'getKey', 'getKeys', 'getSize', 'getValues',
            'merge', 'toQueryObjects', 'toQueryString' ];
    },

    eachDemo: function () {
        var obj = {
            key1: 'value1',
            key2: 123,
            key3: true
        };

        var result = [];
        Ext.Object.each(obj, function (key, value) {
            var txt = [key, ': ', value].join('');
            console.log(txt);
            result.push(txt);
        }, this);

        this.showTitleText('each() demo', result.join('<br>'));
    },

    fromQueryStringDemo: function () {
        var txt = 'key1=value1&key2=123&key3=true';
        var obj = Ext.Object.fromQueryString(txt);
        console.dir(obj);
        this.showTitleText('fromQueryString() demo', obj);
    },

    getKeyDemo: function () {
        var obj = {
            key1: 'value1',
            key2: 123,
            key3: true
        };

        var key = Ext.Object.getKey(obj, 'value1');
        console.dir(key);
        this.showTitleText('getKey() demo', key);
    },

    getKeysDemo: function () {
        var obj = {
            key1: 'value1',
            key2: 123,
            key3: true
        };

        var keys = Ext.Object.getKeys(obj);
        console.dir(keys);
        this.showTitleText('getKeys() demo', keys);
    },

    getSizeDemo: function () {
        var obj = {
            key1: 'value1',
            key2: 123,
            key3: true
        };

        var size = Ext.Object.getSize(obj);
        console.dir(size);
        this.showTitleText('getSize() demo', size);
    },

    getValuesDemo: function () {
        var obj = {
            key1: 'value1',
            key2: 123,
            key3: true
        };

        var values = Ext.Object.getValues(obj);
        console.dir(values);
        this.showTitleText('getValues() demo', values);
    },

    mergeDemo: function () {
        var obj1 = {
            key1: 'value1',
            key2: 'value2',
            key3: 345,
            key4: false,
            key5: {
                innerKey1: 'innerValue1'
            }
        };
        var obj2 = {
            key6: 345,
            key7: 'value1',
            key8: 'value2',
            key9: false,
            key5: {
                innerKey2: 'innerValue1'
            }
        };
        var merged = Ext.Object.merge(obj1, obj2);
        console.dir(merged);
        this.showTitleText('Merged Object', Ext.JSON.encode(merged));
    },

    toQueryObjectsDemo: function () {
        var obj = {
            day: 5,
            month: 3,
            year: 2002,
            time: {
                hour: 9,
                minute: 20
            }
        };
        var objs = Ext.Object.toQueryObjects('date', obj, true);
        console.dir(objs);
        this.showTitleText('toQueryObjects() demo', objs);
    },

    toQueryStringDemo: function () {
        var obj = {
            key1: 'value1',
            key2: 123,
            key3: true
        };

        var txt = Ext.Object.toQueryString(obj);
        console.log(txt);
        this.showTitleText('toQueryString() demo', txt);
    }
});

