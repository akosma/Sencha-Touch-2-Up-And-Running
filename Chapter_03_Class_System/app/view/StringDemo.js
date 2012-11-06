Ext.define('Chapter3ClassSystem.view.StringDemo', {
    extend: 'Chapter3ClassSystem.view.DemoPanel',
    xtype: 'stringdemo',
    
    getPrefix: function () {
        return 'Ext.String';
    },

    getFunctions: function () {
        return [ 'capitalize', 'ellipsis', 'escape', 'escapeRegex', 'format',
                'htmlDecode', 'htmlEncode', 'leftPad', 'repeat', 'toggle',
                'trim', 'urlAppend' ];
    },


    capitalizeDemo: function () {
        var sample = "whatever you shouldn't usually do.";
        var txt = Ext.String.capitalize(sample);
        console.log(txt);
        this.showTitleText('capitalize() demo', txt);
    },

    ellipsisDemo: function () {
        var sample = "whatever you shouldn't usually do.";
        var txt = Ext.String.ellipsis(sample, 15);
        console.log(txt);
        this.showTitleText('ellipsis() demo', txt);
    },

    escapeDemo: function () {
        var sample = "whatever you shouldn't usually do.";
        var txt = Ext.String.escape(sample);
        console.log(txt);
        this.showTitleText('escape() demo', txt);
    },

    escapeRegexDemo: function () {
        var sample = "whatever you shouldn't usually do.";
        var txt = Ext.String.escapeRegex(sample);
        console.log(txt);
        this.showTitleText('escapeRegex() demo', txt);
    },

    formatDemo: function () {
        var sample = '<p class="{0}">This is a <strong>{1}</strong></p>';
        var txt = Ext.String.format(sample, 'test', 'paragraph');
        console.log(txt);
        this.showTitleText('format() demo', txt);
    },

    htmlDecodeDemo: function () {
        var sample = '&lt;p class=&quot;test&quot;&gt;This is a &lt;strong&gt;paragraph&lt;/strong&gt;&lt;/p&gt;';
        var txt = Ext.String.htmlDecode(sample);
        console.log(txt);
        this.showTitleText('htmlDecode() demo', ['<textarea>', txt, '</textarea>'].join(''));
    },

    htmlEncodeDemo: function () {
        var sample = '<p class="test">This is a <strong>paragraph</strong></p>';
        var txt = Ext.String.htmlEncode(sample);
        console.log(txt);
        this.showTitleText('htmlEncode() demo', ['<textarea>', txt, '</textarea>'].join(''));
    },

    leftPadDemo: function () {
        var sample = "whatever you shouldn't usually do.";
        var txt = Ext.String.leftPad(sample, 10, '-');
        console.log(txt);
        this.showTitleText('leftPad() demo', txt);
    },

    repeatDemo: function () {
        var txt = Ext.String.repeat('=-=-=-=', 10, '/');
        console.log(txt);
        this.showTitleText('repeat() demo', txt);
    },

    toggleDemo: function () {
        var txt = 'No';
        txt = Ext.String.toggle(txt, 'Yes', 'No');
        console.log(txt);
        this.showTitleText('toggle() demo', txt);
    },

    trimDemo: function () {
        var sample = "       whatever you shouldn't usually do.         ";
        var txt = Ext.String.trim(sample);
        console.log(txt);
        this.showTitleText('trim() demo', txt);
    },

    urlAppendDemo: function () {
        var sample = 'http://test.com/whatever';
        var params = {
            key1: 'value1', 
            key2: true,
            key3: 34536.65
        };
        var paramsTxt = Ext.Object.toQueryString(params);
        var txt = Ext.String.urlAppend(sample, paramsTxt);
        console.log(txt);
        this.showTitleText('urlAppend() demo', txt);
    }
});

