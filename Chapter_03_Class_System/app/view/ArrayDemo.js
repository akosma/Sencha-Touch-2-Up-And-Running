Ext.define('Chapter3ClassSystem.view.ArrayDemo', {
    extend: 'Chapter3ClassSystem.view.DemoPanel',
    xtype: 'arraydemo',

    getPrefix: function () {
        return 'Ext.Array';
    },

    getFunctions: function () {
        return ['min'];
        //return ['clean', 'contains', 'difference', 'erase', 
            //'every', 'filter', 'flatten', 'from', 'include', 'indexOf',
            //'insert', 'intersect', 'map', 'max', 'mean', 'merge', 'min',
            //'pluck', 'remove', 'replace', 'slice', 'some', 'sort', 'splice',
            //'sum', 'toArray', 'union', 'unique'];
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
        var intersection = Ext.Array.intersect(anotherArray, sampleArray);
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

    meanDemo: function () {},

    mergeDemo: function () {},

    minDemo: function () {
        var sampleArray = [1234, 456, -234, 654, 0, 'whatever', "BOOM", true, 'test'];
        console.log('Original Array');
        console.dir(sampleArray);
        var max = Ext.Array.min(sampleArray);
        console.log('Minimum value: ' + max);
        this.showTitleText('Minimum value', max);
    },

    pluckDemo: function () {},

    removeDemo: function () {},

    replaceDemo: function () {},

    sliceDemo: function () {},

    someDemo: function () {},

    sortDemo: function () {},

    spliceDemo: function () {},

    sumDemo: function () {},

    toArrayDemo: function () {},

    unionDemo: function () {},

    uniqueDemo: function () {},

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

