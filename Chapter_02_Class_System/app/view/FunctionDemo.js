Ext.define('Chapter2ClassSystem.view.FunctionDemo', {
    extend: 'Chapter2ClassSystem.view.DemoPanel',
    xtype: 'functiondemo',

    getPrefix: function () {
        return 'Ext.Function';
    },

    getFunctions: function () {
        return [ 'createDelayed', 'createInterceptor', 'createSequence', 'createThrottled',
            'defer', 'flexSetter', 'pass' ];
    },

    createDelayedDemo: function () {
        var fn = function (value) {
            console.log('this is fn, this is the value: "' + value + '"');
            this.showTitleText('This has been delayed', 'for about 1500 ms, and "' + value + '" was passed as parameter');
        };

        var delayed = Ext.Function.createDelayed(fn, 1500, this, [ 345 ]);

        delayed();
    },

    createInterceptorDemo: function () {
        var self = this;

        var originalFn = function (value) {
            console.log('this is the original function, this is the value: "' + value + '"');
            self.showTitleText('This has been intercepted until "' + value + '" was passed as parameter');
        };

        var newFn = function (value) {
            console.log('inside newFn, value is "' + value + '"');
            return (value === 234);
        };

        var interceptor = Ext.Function.createInterceptor(originalFn, newFn);

        interceptor(0);
        interceptor(666);
        interceptor(234);
    },

    createSequenceDemo: function () {
        var first = function (value) {
            console.log('inside the first() function, value = "' + value + '"');
            return 'first';
        };

        var second = function (value) {
            console.log('inside the second() function, value = "' + value + '"');
            return 'second';
        };

        var third = Ext.Function.createSequence(first, second);

        var value = third('boom');
        console.log('third() returns "' + value + '"');

        this.showTitleText('createSequence() demo', 'third() returns "' + value + '"');
    },

    createThrottledDemo: function () {
        var fn = function () {
            console.log('This is being throttled');
            this.showTitleText('createThrottle() demo', 'No matter how many times we call it, the throttled function only executes once every 4 seconds.');
        };

        var throttled = Ext.Function.createThrottled(fn, 4000, this);

        // The first call is executed immediately:
        throttled();

        // No matter how many times we try, this will only be executed
        // once, and after 4 seconds:
        throttled();
        throttled();
        throttled();
        throttled();
        throttled();
        throttled();
    },

    deferDemo: function () {
        Ext.Function.defer(function (arg) {
            console.log('This function has been deferred 1500 ms, arg = "' + arg + '"');
            this.showTitleText('defer() demo', 'This function has been deferred 1500 ms, arg = "' + arg + '"');
        }, 1500, this, [ 'argument1' ]);
    },

    flexSetterDemo: function () {
        var setValue = Ext.Function.flexSetter(function(name, value) {
            console.log('name: "' + name + '", value: "' + value + '"');
        });

        setValue('name1', 'value1');

        setValue({
            name2: 'value2',
            name3: 'value3',
            name4: 'value4'
        });
        
        this.showTitleText('flexSetter() demo', 'Check the console for more information');
    },

    passDemo: function () {
        var originalFunction = function(){
            console.log('inside the original function, arguments:');
            console.dir(Ext.Array.from(arguments));
        };

        var callback = Ext.Function.pass(originalFunction, ['first', 'second']);

        callback();
        callback('third');

        this.showTitleText('pass() demo', 'Check the console for more information');
    }
});

