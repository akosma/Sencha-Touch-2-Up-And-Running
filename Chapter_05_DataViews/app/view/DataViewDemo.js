Ext.define('Chapter5DataViews.view.DataViewDemo', {
    extend: 'Ext.dataview.DataView',
    xtype: 'dataviewdemo',
    config: {
        title: 'DataView Demo',
        id: 'demoDataView',
        xtype: 'dataview',
        listeners:  {
            itemsingletap: function (dataview, index, target, record, e, eOpts) {
                var id = record.get('id');
                var author = record.get('from_user');
                var message = Ext.String.format('Tweet {0}<br>from {1}', id, author);
                Ext.Msg.alert('Information', message);
            },
            itemswipe: function (dataview, index, target, record, e, eOpts) {
                var id = record.get('id');
                var message = Ext.String.format('Swiping! {0}', id);
                Ext.Msg.alert(message);
            },
            itemdoubletap: function (dataview, index, target, record, e, eOpts) {
                var name = record.get('from_user_name');
                var message = Ext.String.format('Double tap! {0}', name);
                Ext.Msg.alert(message);
            }
        },
        itemTpl: '<div class="tweetdiv"><div class="avatar"><img src="{profile_image_url}" /></div><div class="text"><p class="username">{from_user_name}</p><p class="tweet">{text}</p><p class="date">{[Ext.Date.format(values.created_at, "d.m.Y, H:i")]}</p></div></div>',
        store: {
            autoLoad: true,
            fields: [{
                name: 'id',
                type: 'int'
            }, {
                name: 'profile_image_url',
                type: 'string'
            }, {
                name: 'from_user',
                type: 'string'
            }, {
                name: 'from_user_name',
                type: 'string'
            }, {
                name: 'text',
                type: 'string'
            }, {
                name: 'created_at',
                type: 'date',
                dateFormat: 'D, j M Y H:i:s O'
            }],
            proxy: {
                type: 'jsonp',
                url: 'http://search.twitter.com/search.json?q=argentina',
                reader: {
                    type: 'json',
                    rootProperty: 'results'
                }
            }
        }
    }
});

