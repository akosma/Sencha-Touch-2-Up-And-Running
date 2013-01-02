Ext.define('Chapter2ClassSystem.view.DomHelper', {
    extend: 'Chapter2ClassSystem.view.DemoPanel',
    xtype: 'domhelperdemo',

    config: {
        html: '<div class="outerDiv"><div id="someDiv" class="innerDiv"></div></div>'
    },

    getPrefix: function () {
        return 'Ext.DomHelper';
    },
    
    getInstructions: function () {
        return '';
    },
    
    getFunctions: function () {
        return [ 'append', 'insertBefore', 'insertAfter', 'overwrite', 'insertHtml' ];
    },

    appendDemo: function () {
        var div = Ext.DomQuery.selectNode('#someDiv');
        Ext.DomHelper.append(div, '<p>A paragraph added using append()</p>');
    },

    insertBeforeDemo: function () {
        var div = Ext.DomQuery.selectNode('#someDiv');
        Ext.DomHelper.insertBefore(div, '<p>A paragraph inserted before the div</p>');
    },

    insertAfterDemo: function () {
        var div = Ext.DomQuery.selectNode('#someDiv');
        Ext.DomHelper.insertAfter(div, '<p>A paragraph inserted after the div</p>');
    },

    overwriteDemo: function () {
        var div = Ext.DomQuery.selectNode('#someDiv');
        Ext.DomHelper.overwrite(div, '<div id="someDiv">This is an overwritten DIV</div>');
    },

    insertHtmlDemo: function () {
        var div = Ext.DomQuery.selectNode('#someDiv');

        // Valid parameters:
        // beforeBegin: <HERE><div>Contents</div>
        // afterBegin: <div><HERE>Contents</div>
        // beforeEnd: <div>Contents<HERE></div>
        // afterEnd: <div>Contents</div><HERE>
        Ext.DomHelper.insertHtml('beforeBegin', div, '<div class="inserted">inserted as HTML</div>');
    }
});

