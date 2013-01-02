Ext.define('Chapter2ClassSystem.view.ArrayDemo', {
    extend: 'Chapter2ClassSystem.view.DemoPanel',
    xtype: 'arraydemo',

    getPrefix: function () {
        return 'Ext.Array';
    },

    getFunctions: function () {
        return ['clean', 'contains', 'difference', 'erase', 
            'every', 'filter', 'flatten', 'from', 'include', 'indexOf',
            'insert', 'intersect', 'map', 'max', 'mean', 'merge', 'min',
            'pluck', 'remove', 'replace', 'slice', 'some', 'sort', 'splice',
            'sum', 'toArray', 'union', 'unique'];
    },

    cleanDemo: function () {
        var sampleArray = [1234, true, 'asdfadf', null, 'another string', '', 0];
        var cleanArray = Ext.Array.clean(sampleArray);
        console.log('Original array:');
        console.dir(sampleArray);
        this.showArray('Clean array', cleanArray);
    },

    containsDemo: function () {
        var sampleArray = [1234, true, 'asdfadf', null, 'another string', '', 0];
        var tests = [false, '', 'whatever', 'asdfadf', 1234, 6578];
        var results = [];

        Ext.Array.each(tests, function (item) {
            if (Ext.Array.contains(sampleArray, item)) {
                console.log('"' + item + '" IS contained');
                results.push('<span class="green">YES</span>: "' + item + '"');
            }
            else {
                console.log('"' + item + '" is NOT contained');
                results.push('<span class="red">NO</span>: "' + item + '"');
            }
        }, this);
        var text = results.join('<br>');
        this.showTitleText('Comparison results', text);
    },

    differenceDemo: function () {
        var sampleArray = [1234, true, 'asdfadf', null, 'another string', '', 0];
        var anotherArray = ['asdfadf', new Date(), 1234, true, '', 234];
        var difference = Ext.Array.difference(sampleArray, anotherArray);
        console.log('Original array:');
        console.dir(sampleArray);
        console.log('Another array:');
        console.dir(anotherArray);
        this.showArray('Difference', difference);
    },

    eraseDemo: function () {
        var sampleArray = [1234, true, 'asdfadf', null, 'another string', '', 0];
        var erasedArray = Ext.Array.erase(sampleArray, 1, 3);
        console.log('Original array:');
        console.dir(sampleArray);
        this.showArray('Erased array', erasedArray);
    },

    everyDemo: function () {
        var sampleArray = [1234, true, 'asdfadf', null, 'another string', '', 0];
        var result = Ext.Array.every(sampleArray, function (item) {
            // If here the inner function returns "false" at any point, the 
            // loop ends and the value in "result" will be "false".
            // In this case, however, as 'whatever' is not contained in the 
            // sampleArray, the function always returns true, and 'result'
            // contains true as well.
            // This function is very similar to 'some()'
            return (item !== 'whatever');
        }, this);
        console.log('Result of `every()`: ' + result);
        this.showTitleText('Ext.every()', result);
    },

    filterDemo: function () {
        var sampleArray = [1234, true, 'asdfadf', null, 'another string', '', 0];
        var filteredArray = Ext.Array.filter(sampleArray, function (item) {
            return (typeof(item) === 'string');
        }, this);
        console.log('Original array:');
        console.dir(sampleArray);
        this.showArray('Filtered Array', filteredArray);
    },

    flattenDemo: function () {
        var sampleArray = [1234, true, 'asdfadf', ['inner array', true, false, 234], 'another string', '', 0];
        var flattenedArray = Ext.Array.flatten(sampleArray);
        console.log('Original array:');
        console.dir(sampleArray);
        this.showArray('Flattened Array', flattenedArray);
    },

    fromDemo: function () {
        var bool = true;
        var booleanArray = Ext.Array.from(bool);
        this.showArray('Generated array', booleanArray);
    },

    includeDemo: function () {
        var sampleArray = [1234, 456, true, 'test'];
        Ext.Array.include(sampleArray, true);
        Ext.Array.include(sampleArray, 'whatever');
        this.showArray('Array with inclusions', sampleArray);
    },

    indexOfDemo: function () {
        var sampleArray = [1234, 456, true, 'test'];
        var index = Ext.Array.indexOf(sampleArray, 'whatever');
        console.log('Index of "whatever" (should be -1):');
        console.log(index);
        this.showTitleText('Index of "whatever" (should be -1)', index);
    },

    insertDemo: function () {
        var sampleArray = [1234, 456, true, 'test'];
        console.log('Original Array');
        console.dir(sampleArray);
        var itemsToInsert = [768, 'something', false, null];
        var insertedArray = Ext.Array.insert(sampleArray, 1, itemsToInsert);
        console.log('Items to insert');
        console.dir(itemsToInsert);
        console.log('insertedArray === sampleArray');
        console.log(insertedArray === sampleArray);
        this.showArray('Array with insertions', insertedArray);
    },

    intersectDemo: function() {
        var sampleArray = [1234, 456, true, 'test'];
        console.log('Original Array');
        console.dir(sampleArray);
        var anotherArray = [true, false, 'test', 'whatever', 456];
        console.log('Another Array');
        console.dir(anotherArray);
        var intersection = Ext.Array.intersect(sampleArray, anotherArray);
        this.showArray('Intersected Array', intersection);
    },

    mapDemo: function () {
        var sampleArray = [1234, 456, true, 'test'];
        console.log('Original Array');
        console.dir(sampleArray);
        var mapped = Ext.Array.map(sampleArray, function (item) {
            return item + '_boom';
        }, this);
        this.showArray('Mapped array', mapped);
    },

    maxDemo: function () {
        var sampleArray = [1234, 456, -234, 654, 0, 'whatever', "BOOM", true, 'test'];
        console.log('Original Array');
        console.dir(sampleArray);
        var max = Ext.Array.max(sampleArray);
        console.log('Maximum value: ' + max);
        this.showTitleText('Maximum value', max);
    },

    meanDemo: function () {
        var sampleArray = [1234, 456, -234, 654, 0];
        console.log('Original Array');
        console.dir(sampleArray);
        var mean = Ext.Array.mean(sampleArray);
        console.log('Mean value: ' + mean);
        this.showTitleText('Mean value', mean);
    },

    mergeDemo: function () {
        var sampleArray = [1234, 456, true, 'test'];
        console.log('Original Array');
        console.dir(sampleArray);
        var anotherArray = [true, false, 'test', 'whatever', 456];
        console.log('Another Array');
        console.dir(anotherArray);
        var merge = Ext.Array.merge(anotherArray, sampleArray);
        this.showArray('Merged Array', merge);
    },

    minDemo: function () {
        var sampleArray = [1234, 456, -234, 654, 0, 'whatever', "BOOM", true, 'test'];
        console.log('Original Array');
        console.dir(sampleArray);
        var min = Ext.Array.min(sampleArray);
        console.log('Minimum value: ' + min);
        this.showTitleText('Minimum value', min);
    },

    pluckDemo: function () {
        var sampleArray = [{
            key1: 'value1',
            key2: 'value2'
        }, {
            key1: 'value3',
            key2: 'value4'
        }, {
            key1: 'value5', 
            key2: 'value6'
        }, {
            key1: 'value7',
            key2: 'value8'
        }, {
            key1: 'value9',
            key2: 'value0'
        }];
        console.log('Original Array');
        console.dir(sampleArray);
        var plucked = Ext.Array.pluck(sampleArray, 'key1');
        this.showArray('Plucked Array', plucked);
    },

    removeDemo: function () {
        var sampleArray = [1234, 456, -234, 654, 0, 'whatever', "BOOM", true, 'test'];
        console.log('Original Array');
        console.dir(sampleArray);
        Ext.Array.remove(sampleArray, 'whatever');
        Ext.Array.remove(sampleArray, -234);
        Ext.Array.remove(sampleArray, true);
        Ext.Array.remove(sampleArray, 'non existent value');
        this.showArray('Array after removing items', sampleArray);
    },

    replaceDemo: function () {
        var sampleArray = [1234, 456, -234, 654, 0, 'whatever', "BOOM", true, 'test'];
        console.log('Original Array');
        console.dir(sampleArray);
        var replacements = ['boom', 'boom again'];
        console.log('Replacements');
        console.dir(replacements);
        Ext.Array.replace(sampleArray, 4, 2, replacements);
        this.showArray('Array after replacements', sampleArray);
    },

    sliceDemo: function () {
        var sampleArray = [1234, 456, -234, 654, 0, 'whatever', "BOOM", true, 'test'];
        console.log('Original Array');
        console.dir(sampleArray);
        var slice = Ext.Array.slice(sampleArray, 4, 7);
        this.showArray('Sliced array', slice);
    },

    someDemo: function () {
        var sampleArray = [1234, true, 'asdfadf', null, 'another string', '', 0];
        console.log('Original Array');
        console.dir(sampleArray);
        var result = Ext.Array.some(sampleArray, function (item) {
            // If here the inner function returns "true" at any point, the 
            // loop ends and the value in "result" will be "true".
            // In this case, however, as 'another string' is contained in the 
            // sampleArray, the function returns true at some point, and 'result'
            // contains true as well.
            // This function is very similar to 'every()'
            return (item === 'another string');
        }, this);
        console.log('Result of `some()`: ' + result);
        this.showTitleText('Ext.some()', result);
    },

    sortDemo: function () {
        var sampleArray = [1234, true, 'ASDFADF', -76, '', null, 'another string', '', 0];
        console.log('Original Array');
        console.dir(sampleArray);
        var sorted = Ext.Array.sort(sampleArray, function (item1, item2) {
            if (item1 === item2) {
                return 0;
            }
            return (item1 < item2) ? -1 : 1;
        });
        this.showArray('Sorted array', sorted);
    },

    spliceDemo: function () {
        var sampleArray = [1234, 456, -234, 654, 0, 'whatever', "BOOM", true, 'test'];
        console.log('Original Array');
        console.dir(sampleArray);
        // Similar to 'replace()', but the signature here 
        // is exactly the similar as in the standard JavaScript function
        // of the same name; the replacements are passed as variadic values,
        // after the third parameter.
        Ext.Array.splice(sampleArray, 4, 2, 'boom', 'boom again');
        this.showArray('Array after splice', sampleArray);
    },

    sumDemo: function () {
        var sampleArray = [1234, 456, -234, 654, 0, 'whatever'];
        console.log('Original Array');
        console.dir(sampleArray);
        var sum = Ext.Array.sum(sampleArray);
        console.log('Sum: ' + sum);
        this.showTitleText('Sum', sum);
    },

    toArrayDemo: function () {
        var iterable = {
            0: 'value0',
            1: 'value1',
            2: 'value2',
            3: 'value3',
            4: 'value4',
            length: 5
        };
        console.log('Original iterable object');
        console.dir(iterable);
        var array = Ext.Array.toArray(iterable);
        this.showArray('Array created from iterable', array);
    },

    unionDemo: function () {
        // 'union()' is an alias for 'merge()'
        this.mergeDemo();
    },

    uniqueDemo: function () {
        var sampleArray = [1234, 456, 'whatever', 'whatever', 456, 'whatever'];
        console.log('Original Array');
        console.dir(sampleArray);
        var unique = Ext.Array.unique(sampleArray);
        this.showArray('Unique values', unique);
    },

    showArray: function (title, array) {
        var text = [];
        var index = 0;
        Ext.Array.each(array, function (item) {
            text.push(index + '> "' + item + '"');
            ++index;
        }, this);
        console.log(title);
        console.dir(array);
        this.showTitleText(title, text.join('<br>'));
    }
});

