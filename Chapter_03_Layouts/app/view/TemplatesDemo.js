Ext.define('Chapter3Layouts.view.TemplatesDemo', {
    extend: 'Ext.Container',
    xtype: 'templatesdemo',
    config: {
        scrollable: true,
        data: {
            countries: [{
                country: 'Argentina', flagColors: ['light blue', 'white']
            }, {
                country: 'Switzerland', flagColors: ['red', 'white']
            }, {
                country: 'France', flagColors: ['blue', 'white', 'red']
            }]
        },
        tpl: Ext.create('Ext.XTemplate', '<tpl for="countries">',
                        '<div>{#}. {country}: {flagColors:this.join}</div>',
                        '</tpl>',
                        {
                            join: function (value) {
                                return value.join(', ');
                            }
                        })
    }
});

