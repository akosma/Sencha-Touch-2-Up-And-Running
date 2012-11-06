Ext.define('Chapter3ClassSystem.view.JsonDemo', {
    extend: 'Chapter3ClassSystem.view.DemoPanel',
    xtype: 'jsondemo',
    
    getPrefix: function () {
        return 'Ext.JSON';
    },

    getFunctions: function () {
        return [ 'decode', 'encode' ];
    },

    decodeDemo: function () {
        var txt = '{"key1":"value1","key2":"2012-11-06T13:24:07","key3":true,"key4":345.65,"key5":["value2","value3",768]}';
        var obj = Ext.JSON.decode(txt);
        console.dir(obj);
        this.showTitleText('JSON decoding', obj);
    },

    encodeDemo: function () {
        var obj = {
            key1: 'value1',
            key2: new Date(),
            key3: true,
            key4: 345.65,
            key5: [
                'value2',
                'value3',
                768
            ]
        };
        var txt = Ext.JSON.encode(obj);
        console.log(txt);
        this.showTitleText('JSON encoding', txt);
    }
});

