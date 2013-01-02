Ext.define('Chapter3Views.view.ChartsDemo', {
    extend: 'Ext.Container',
    xtype: 'chartsdemo',
    config: {
        layout: {
            type: 'fit'
        },
        items: [{
            xtype: 'chart',
            background: 'none',
            store: 'TemperatureStore',
            animate: true,
            interactions: ['panzoom', {
                type: 'iteminfo',
                listeners: {
                    show: function(me, item, panel) {
                        var components = [
                            'Temperature in Bern, Switzerland',
                            '<br>',
                            Ext.Date.format(item.record.get('time'), 'D, j M Y'),
                            '<br>',
                            Ext.Number.toFixed(item.record.get('temperature'), 1),
                            ' ºC'
                        ];
                        panel.setHtml(components.join(''));
                    }
                }
            }, 'itemhighlight'],
            legend: {
                position: 'bottom'
            },
            series: [{
                type: 'line',
                xField: 'time',
                yField: 'temperature',
                title: 'Temperatures in Bern',
                style: {
                    stroke: 'magenta',
                    lineWidth: 2
                },
                highlightCfg: {
                    scale: 2
                },
                marker: {
                    type: 'circle',
                    stroke: 'magenta',
                    fill: 'pink',
                    lineWidth: 1,
                    radius: 3,
                    shadowColor: 'rgba(0,0,0,0.7)',
                    shadowBlur: 10,
                    shadowOffsetX: 3,
                    shadowOffsetY: 3,
                    fx: {
                        duration: 100
                    }
                }
            }],
            axes: [{
                type: 'numeric',
                increment: 1,
                position: 'left',
                grid: {
                    odd: {
                        fill: 'lightgray'
                    }
                },
                minZoom: 0.25,
                maxZoom: 4,
                title: 'ºC',
                minimum: -40,
                maximum: 40,
                style: {
                    axisLine: true,
                    stroke: 'lightgray'
                }
            }, {
                type: 'time',
                dateFormat: 'd M',
                title: 'Source: openweathermap.org',
                position: 'bottom',
                minZoom: 0.5,
                maxZoom: 2,
                increment: 1,
                grid: true,
                style: {
                    stroke: 'lightgray'
                },
                label: {
                    rotate: {
                        degrees: 315
                    }
                }
            }]
        }]
    }
});

