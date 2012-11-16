Ext.define('Chapter5DataViews.view.NestedListDemo', {
    extend: 'Ext.dataview.NestedList',
    xtype: 'nestedlistdemo',
    config: {
        title: 'Teams',
        margin: 20,
        listConfig: {
            ui: 'round',
            itemTpl: '{text}'
        },
        detailCard: {
            xtype: 'panel',
            html: 'This is the leaf node detail card'
        },
        listeners: {
            itemtap: function (nestedList, list, index, target, record, e, eOpts) {
                var name = record.get('text');
                var html = Ext.String.format('This is the leaf node card of {0}', name);
                this.getDetailCard().setHtml(html);
            }
        },
        store: {
            type: 'tree',
            fields: [{
                name: 'text',
                type: 'string'
            }],
            defaultRootProperty: 'team',
            sorters: 'text',
            root: {
                text: 'Teams',
                team: [{
                    text: 'Finance',
                    team: [{
                        text: 'Alma Boyle',
                        leaf: true
                    }, {
                        text: 'Lane Hicks',
                        leaf: true
                    }]
                }, {
                    text: 'Accounting',
                    team: [{
                        text: 'Fletcher Herbert',
                        leaf: true
                    }, {
                        text: 'Quinn Shields',
                        leaf: true
                    }, {
                        text: 'Randall Brennan',
                        leaf: true
                    }, {
                        text: 'Elmo Irwin',
                        leaf: true
                    }]
                }, {
                    text: 'Human Resources',
                    team: [{
                        text: 'Felicia Gray',
                        leaf: true
                    }, {
                        text: 'Darius Barrera',
                        leaf: true
                    }, {
                        text: 'Petra Ferguson',
                        leaf: true
                    }]
                }]
            }
        }
    }
});

