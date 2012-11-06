Ext.define('Chapter3ClassSystem.view.HashMapDemo', {
    extend: 'Chapter3ClassSystem.view.DemoPanel',
    xtype: 'hashmapdemo',
    
    getPrefix: function () {
        return 'Ext.util.HashMap';
    },

    getFunctions: function () {
        return [ 'add', 'clear', 'contains', 'containsKey', 'each', 'get', 'getCount', 
                'getKeys', 'getValues', 'remove', 'removeByKey', 'replace' ];
    },

    addDemo: function () {
        var map = Ext.create('Ext.util.HashMap');
        map.on('add', function (map, key, value, eOpts) {
            console.log('EVENT; item added; key: "' + key + '", value: "' + value + '"');
        });

        map.add('key1', 'value1');
        map.add('key2', 1234);
        map.add('key3', true);

        var txt = 'Map has ' + map.getCount() + ' values';
        console.log(txt);
        this.showTitleText('add() demo', txt);
    },
    
    clearDemo: function () {
        var map = Ext.create('Ext.util.HashMap');
        map.add('key1', 'value1');
        map.add('key2', 1234);
        map.add('key3', true);

        map.on('clear', function (map, eOpts) {
            console.log('EVENT; map cleared');
        });

        map.clear();
        var txt = 'Map has ' + map.getCount() + ' values';
        console.log(txt);
        this.showTitleText('clear() demo', txt);
    },

    containsDemo: function () {
        var map = Ext.create('Ext.util.HashMap');
        map.add('key1', 'value1');
        map.add('key2', 1234);
        map.add('key3', true);

        var txt = 'Map contains "value1" : ' + map.contains('value1');
        console.log(txt);
        this.showTitleText('contains() demo', txt);
    },

    containsKeyDemo: function () {
        var map = Ext.create('Ext.util.HashMap');
        map.add('key1', 'value1');
        map.add('key2', 1234);
        map.add('key3', true);

        var txt = 'Map contains "key2" : ' + map.containsKey('key2');
        console.log(txt);
        this.showTitleText('containsKey() demo', txt);
    },

    eachDemo: function () {
        var map = Ext.create('Ext.util.HashMap');
        map.add('key1', 'value1');
        map.add('key2', 1234);
        map.add('key3', true);

        var results = [];
        map.each(function (key, value) {
            var txt = key + '> ' + value;
            console.log(txt);
            results.push(txt);
        });
        this.showTitleText('each() demo', results.join('<br>'));
    },

    getDemo: function () {
        var map = Ext.create('Ext.util.HashMap');
        map.add('key1', 'value1');
        map.add('key2', 1234);
        map.add('key3', true);

        var obj = map.get('key1');
        var txt = 'object with key "key1" = "' + obj + '"';
        console.log(txt);
        this.showTitleText('get() demo', txt);
    },

    getCountDemo: function () {
        var map = Ext.create('Ext.util.HashMap');
        map.add('key1', 'value1');
        map.add('key2', 1234);
        map.add('key3', true);
        
        var txt = 'Map has ' + map.getCount() + ' values';
        console.log(txt);
        this.showTitleText('getCount() demo', txt);
    },

    getKeysDemo: function () {
        var map = Ext.create('Ext.util.HashMap');
        map.add('key1', 'value1');
        map.add('key2', 1234);
        map.add('key3', true);

        var keys = map.getKeys();
        console.dir(keys);
        this.showTitleText('getKeys() demo', keys);
    },

    getValuesDemo: function () {
        var map = Ext.create('Ext.util.HashMap');
        map.add('key1', 'value1');
        map.add('key2', 1234);
        map.add('key3', true);

        var values = map.getValues();
        console.dir(values);
        this.showTitleText('getValues() demo', values);
    },

    removeDemo: function () {
        var map = Ext.create('Ext.util.HashMap');
        map.add('key1', 'value1');
        map.add('key2', 1234);
        map.add('key3', true);
        
        map.on('remove', function (map, key, value, eOpts) {
            console.log('EVENT; item removed; key: "' + key + '", value: "' + value + '"');
        });
        
        map.remove(true);
        var txt = 'Map has ' + map.getCount() + ' values';
        console.log(txt);
        console.dir(map);
        this.showTitleText('remove() demo', txt);
    },

    removeByKeyDemo: function () {
        var map = Ext.create('Ext.util.HashMap');
        map.add('key1', 'value1');
        map.add('key2', 1234);
        map.add('key3', true);
        
        map.on('remove', function (map, key, value, eOpts) {
            console.log('EVENT; item removed; key: "' + key + '", value: "' + value + '"');
        });
        
        map.removeByKey('key2');
        var txt = 'Map has ' + map.getCount() + ' values';
        console.log(txt);
        console.dir(map);
        this.showTitleText('removeByKey() demo', txt);
    },

    replaceDemo: function () {
        var map = Ext.create('Ext.util.HashMap');
        map.add('key1', 'value1');
        map.add('key2', 1234);
        map.add('key3', true);
        
        map.on('replace', function (map, key, value, old, eOpts) {
            console.log('EVENT; item replaced; key: "' + key + '", old value: "' + old  +'", new value: "' + value + '"');
        });
        
        map.replace('key2', 'new value');
        var txt = 'Map has ' + map.getCount() + ' values; new item at "key2" = "' + map.get('key2') + '"';
        console.log(txt);
        console.dir(map);
        this.showTitleText('replace() demo', txt);
    }
});

