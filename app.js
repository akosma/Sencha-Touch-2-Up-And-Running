var data = [{ 
    title: 'Template',
    url: 'Chapter_Template',
    chapter: '2. Getting Started'
}, { 
    title: 'Item 2',
    url: '',
    chapter: '3. Data'
}, { 
    title: 'Item 3',
    url: '',
    chapter: '3. Data'
}, { 
    title: 'Item 4',
    url: '',
    chapter: '4. Whatever'
}];

var store = Ext.create('Ext.data.Store', {
    data: data,
    grouper: {
        groupFn: function(record) {
            return record.get('chapter');
        }
    }
});

Ext.application({
    name: 'SenchaTouch2UpAndRunning',
    launch: function () {
        Ext.Viewport.add({
            xtype: 'list',
            pinHeaders: false,
            fullscreen: true,
            itemTpl: '{title}',
            store: store,
            grouped: true,
            items: [{
                xtype: 'titlebar',
                docked: 'top',
                title: 'Sencha Touch 2 Code'
            }, {
                xtype: 'titlebar',
                docked: 'bottom',
                title: 'by Adrian Kosmaczewski'
            }],
            ui: 'round',
            listeners: {
                itemtap: function(list, index, target, record, e, eOpts) {
                    location.href = record.get('url');
                }
            }
        });
    }
});

