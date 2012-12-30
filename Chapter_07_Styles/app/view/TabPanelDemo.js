Ext.define('Chapter7Styles.view.TabPanelDemo', {
    extend: 'Ext.Panel',
    xtype: 'tabpaneldemo',
    config: {
        layout: {
            type: 'card'
        },
        items: [{
            xtype: 'tabpanel',
            layout: {
                // Possible values are: cover, cube, fade, flip, pop, reveal, scroll, slide
                // You can also specify "false" (boolean value) to disable all
                // animations
                animation: 'flip'
            },
            tabBarPosition: 'bottom',
            //tabBarPosition: 'top',
            //tabBar: {
                //scrollable: true            
            //},
            items: [{
                iconCls: 'user',
                iconMask: true,
                title: 'Profile',
                style: 'background-color: #e17467; color: white',
                html: 'Your profile screen here'
            }, {
                iconCls: 'favorites',
                iconMask: true,
                title: 'Favorites',
                style: 'background-color: #f6eb69',
                html: 'Your favorites here'
            }, {
                iconCls: 'search',
                iconMask: true,
                title: 'Search',
                style: 'background-color: #74e796',
                html: 'Search engine here'
            }, {
                iconCls: 'action',
                iconMask: true,
                title: 'Action',
                style: 'background-color: #688ee2',
                html: 'Do something here'
            }, {
                iconCls: 'more',
                iconMask: true,
                title: 'More',
                style: 'background-color: lightgray',
                html: 'There is lots you can do here'
            }]
        }]
    }
});


