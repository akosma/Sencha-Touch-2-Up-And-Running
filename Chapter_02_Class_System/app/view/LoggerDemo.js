Ext.define('Chapter2ClassSystem.view.LoggerDemo', {
    extend: 'Chapter2ClassSystem.view.DemoPanel',
    xtype: 'loggerdemo',
    
    getPrefix: function () {
        return 'Ext.Logger';
    },

    getFunctions: function () {
        return [ 'deprecate', 'error', 'log', 'warn' ];
    },

    deprecateDemo: function () {
        Ext.Logger.deprecate('this method is deprecated');
        this.showTitleText('Logger samples', 'Check the console for more information');
    },

    errorDemo: function () {
        Ext.Logger.error('this is an error message');
        this.showTitleText('Logger samples', 'Check the console for more information');
    },

    logDemo: function () {
        Ext.Logger.log('this is an generic log message', 0);
        this.showTitleText('Logger samples', 'Check the console for more information');
    },

    warnDemo: function () {
        Ext.Logger.warn('this is an warning message');
        this.showTitleText('Logger samples', 'Check the console for more information');
    }
});


