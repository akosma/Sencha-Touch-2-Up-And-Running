Ext.define('Chapter3ClassSystem.view.VersionDemo', {
    extend: 'Chapter3ClassSystem.view.DemoPanel',
    xtype: 'versiondemo',
    
    getPrefix: function () {
        return 'Ext.Version';
    },

    getFunctions: function () {
        return [ 'main' ];
    },

    mainDemo: function () {
        var currentVersion = Ext.version;
        var version = Ext.create('Ext.Version', currentVersion);
        
        var results = {};
        results.equals = version.equals('1.0');
        results.build = version.getBuild();
        results.major = version.getMajor();
        results.minor = version.getMinor();
        results.patch = version.getPatch();
        results.release = version.getRelease();
        results.shortVersion = version.getShortVersion();
        results.greaterThan1 = version.isGreaterThan('1.0');
        results.greaterThanOrEqual1 = version.isGreaterThanOrEqual('1.0');
        results.lessThan1 = version.isLessThan('1.0');
        results.lessThanOrEqual1 = version.isLessThanOrEqual('1.0');
        results.match = version.match('5.0');
        results.array = version.toArray();

        var txt = [];
        Ext.Object.each(results, function (key, value) {
            txt.push(key + '> "' + value + '"');
        }, this);

        console.log(txt.join('\n'));
        this.showTitleText('Ext.Version demo', txt.join('<br>'));
    }

});

