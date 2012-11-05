Ext.define('Chapter3ClassSystem.view.DelayedTaskDemo', {
    extend: 'Chapter3ClassSystem.view.DemoPanel',
    xtype: 'delayedtaskdemo',

    getPrefix: function () {
        return 'Ext.util.DelayedTask';
    },

    getFunctions: function () {
        return ['delay'];
    },

    delayDemo: function () {
        var self = this;
        var task = Ext.create('Ext.util.DelayedTask', function() {
            console.log('Delayed!');
            console.log('This message took 1.5 seconds to appear');
            self.showTitleText('Delayed!', 'This popup took 1.5 seconds to appear!');
        });

        task.delay(1500); 
    }
});


