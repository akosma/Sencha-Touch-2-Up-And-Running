Ext.define('Chapter2ClassSystem.view.ExtObjDemo', {
    extend: 'Chapter2ClassSystem.view.DemoPanel',
    xtype: 'extdemo',
    config: {
        id: 'extdemo' // used by the getCmpDemo() function below
    },

    getPrefix: function () {
        return 'Ext';
    },

    getFunctions: function () {
        return [ 'getBody', 'getClass', 'getClassName',
            'getCmp', 'getDisplayName', 'getDoc', 'getHead', 'getStore',
            'id', 'isArray', 'isBoolean', 'isDate', 'isDefined', 'isElement',
            'isEmpty', 'isFunction', 'isIterable', 'isNumber', 'isNumeric',
            'isObject', 'isPrimitive', 'isString', 'iterate',
            'merge', 'namespace', 'ns', 'typeOf', 'valueFrom', 'widget' ];
    },

    getBodyDemo: function () {
        console.dir(Ext.getBody());
        this.showTitleText('Call to getBody()', Ext.getBody().toString());
    },

    getClassDemo: function () {
        var button = Ext.create('Ext.Button');
        var classObject = Ext.getClass(button);
        console.dir(classObject);
        this.showTitleText('Button class', classObject);
    },

    getClassNameDemo: function () {
        var button = Ext.create('Ext.Button');
        var className = Ext.getClassName(button);
        console.dir(className);
        this.showTitleText('Button class name', className);
    },

    getCmpDemo: function () {
        var component = Ext.getCmp('extdemo');
        console.dir(component);
        this.showTitleText('Current component', component);
    },

    getDisplayNameDemo: function () {
        var component = Ext.getCmp('extdemo');
        var componentName = Ext.getDisplayName(component);
        console.dir(componentName);
        this.showTitleText('Current component name', componentName);
    },

    getDocDemo: function () {
        var doc = Ext.getDoc();
        console.dir(doc);
        this.showTitleText('Current HTML document', doc);
    },

    getHeadDemo: function () {
        console.dir(Ext.getHead());
        this.showTitleText('Call to getHead()', Ext.getHead().toString());
    },

    getStoreDemo: function () {
        var store = Ext.getStore('itemstore');
        console.dir(store);
        this.showTitleText('Current store', store);
    },

    idDemo: function () {
        var id = Ext.id();
        console.log(id);
        this.showTitleText('Generated id', id);
    },

    isArrayDemo: function () {
        var array = [];
        var bool = Ext.isArray(array);
        console.log(bool);
        this.showTitleText('Is Array?', bool);
    },

    isBooleanDemo: function () {
        var value = true;
        var bool = Ext.isBoolean(value);
        console.log(bool);
        this.showTitleText('Is Boolean?', bool);
    },

    isDateDemo: function () {
        var value = new Date();
        var bool = Ext.isDate(value);
        console.log(bool);
        this.showTitleText('Is Date?', bool);
    },

    isDefinedDemo: function () {
        var value;
        var bool = Ext.isDefined(value);
        console.log(bool);
        this.showTitleText('Is Defined?', bool);
    },

    isElementDemo: function () {
        var value = Ext.getDoc().dom;
        var bool = Ext.isElement(value);
        console.log(bool);
        this.showTitleText('Is Element?', bool);
    },

    isEmptyDemo: function () {
        // Empty values are:
        // - null
        // - undefined
        // - zero-length array
        // - zero-length string
        var value = [];
        var bool = Ext.isEmpty(value);
        console.log(bool);
        this.showTitleText('Is Empty?', bool);
    },

    isFunctionDemo: function () {
        var value = function () {
            console.log('some very simple function');
        };
        var bool = Ext.isFunction(value);
        console.log(bool);
        this.showTitleText('Is Function?', bool);
    },

    isIterableDemo: function () {
        var value = [];
        var bool = Ext.isIterable(value);
        console.log(bool);
        this.showTitleText('Is Iterable?', bool);
    },

    isNumberDemo: function () {
        var value = 45;
        var bool = Ext.isNumber(value);
        console.log(bool);
        this.showTitleText('Is Number?', bool);
    },

    isNumericDemo: function () {
        var value = '67576.3';
        var bool = Ext.isNumeric(value);
        console.log(bool);
        this.showTitleText('Is Numeric?', bool);
    },

    isObjectDemo: function () {
        var value = { key: 'value' };
        var bool = Ext.isObject(value);
        console.log(bool);
        this.showTitleText('Is Object?', bool);
    },

    isPrimitiveDemo: function () {
        // Primitives are strings, numbers and booleans
        var value = 'primitive';
        var bool = Ext.isPrimitive(value);
        console.log(bool);
        this.showTitleText('Is Primitive?', bool);
    },

    isStringDemo: function () {
        var value = 'string';
        var bool = Ext.isString(value);
        console.log(bool);
        this.showTitleText('Is String?', bool);
    },

    iterateDemo: function () {
        var obj = {
            key1: 'value1',
            key2: 'value2',
            key3: 345,
            key4: false
        };
        var result1 = [];
        Ext.iterate(obj, function (key, value) {
            var str = key + ': ' + value;
            result1.push(str);
            console.log(str);
        }, this);

        var arr = [
            'value1',
            'value2',
            678,
            true
        ];
        var result2 = [];
        var index = 0;
        Ext.iterate(arr, function (item) {
            var str = index + '> ' + item;
            result2.push(str);
            console.log(str);
            ++index;
        }, this);

        var txt = result1.join('<br>') + '<h1>Second</h1>' + result2.join('<br>');
        this.showTitleText('First', txt);
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
        var merged = Ext.merge(obj1, obj2);
        console.dir(merged);
        this.showTitleText('Merged Object', Ext.JSON.encode(merged));
    },

    namespaceDemo: function () {
        Ext.namespace('Whatever.You.Want.Here.can.be.Done');
        console.dir(Whatever);
        this.showTitleText('New namespace', Whatever);
    },

    nsDemo: function () {
        this.namespaceDemo();
    },

    typeOfDemo: function () {
        var undef;
        var nil = null;
        var str = 'string';
        var num = 234;
        var bool = true;
        var date = new Date();
        var func = function () {
            console.log('something');
        };
        var obj = { key1: 'value1' };
        var arr = [ 'value1', 'value2' ];
        var reg = /match/gi;
        var elem = Ext.getDoc().dom;
        
        var all = [ undef, nil, str, num, bool, date, func, obj, arr, reg, elem ];
        
        var results = [];
        var index = 0;
        Ext.iterate(all, function (item) {
            var txt = index + '> ' + item + ': ' + Ext.typeOf(item);
            console.log(txt);
            results.push(txt);
            index++;
        }, this);
        this.showTitleText('typeOf() Demo', results.join('<br>'));
    },

    valueFromDemo: function () {
        var value = Ext.valueFrom('', 'whatever');
        console.log(value);
        this.showTitleText('valueFrom() Demo', value);
    },

    widgetDemo: function () {
        var button = Ext.widget('button');
        var className = Ext.getClassName(button);
        console.dir(className);
        this.showTitleText('Button class name', className);
    }
});

