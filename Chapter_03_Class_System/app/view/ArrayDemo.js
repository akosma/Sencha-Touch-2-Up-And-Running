Ext.define('Chapter3ClassSystem.view.ArrayDemo', {
    extend: 'Chapter3ClassSystem.view.DemoPanel',
    xtype: 'arraydemo',
    config: {
        items: [{
            xtype: 'button',
            text: 'Ext.Array.clean()',
            listeners: {
                tap: function (sender, e, eOpts) {
                    this.getParent().cleanTest();
                }
            }
        }, {
            xtype: 'button',
            text: 'Ext.Array.contains()',
            listeners: {
                tap: function (sender, e, eOpts) {
                    this.getParent().containsTest();
                }
            }
        }, {
            xtype: 'button',
            text: 'Ext.Array.difference()',
            listeners: {
                tap: function (sender, e, eOpts) {
                    this.getParent().differenceTest();
                }
            }
        }, {
            xtype: 'button',
            text: 'Ext.Array.erase()',
            listeners: {
                tap: function (sender, e, eOpts) {
                    this.getParent().eraseTest();
                }
            }
        }]
    },

    cleanTest: function () {
        var sampleArray = [1234, true, 'asdfadf', null, 'another string', '', 0];
        var cleanArray = Ext.Array.clean(sampleArray);
        console.log('Original array:');
        console.dir(sampleArray);
        console.log('Clean array:');
        console.dir(cleanArray);
        this.showArray('Clean array', cleanArray);
    },

    containsTest: function () {
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

    differenceTest: function () {
        var sampleArray = [1234, true, 'asdfadf', null, 'another string', '', 0];
        var anotherArray = ['asdfadf', new Date(), 1234, true, '', 234];
        var difference = Ext.Array.difference(sampleArray, anotherArray);
        console.log('Original array:');
        console.dir(sampleArray);
        console.log('Another array:');
        console.dir(anotherArray);
        console.log('Difference array:');
        console.dir(difference);
        this.showArray('Difference', difference);
    },

    eraseTest: function () {
        var sampleArray = [1234, true, 'asdfadf', null, 'another string', '', 0];
        var erasedArray = Ext.Array.erase(sampleArray, 1, 3);
        console.log('Original array:');
        console.dir(sampleArray);
        console.log('Erased array:');
        console.dir(erasedArray);
        this.showArray('Erased array', erasedArray);
    },

    showArray: function (title, array) {
        var text = [];
        var index = 0;
        Ext.Array.each(array, function (item) {
            text.push(index + '> "' + item + '"');
            ++index;
        }, this);
        this.showTitleText(title, text.join('<br>'));
    }
});

