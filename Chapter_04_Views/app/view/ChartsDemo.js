Ext.define('Chapter4Views.view.ChartsDemo', {
    extend: 'Ext.Container',
    xtype: 'chartsdemo',
    config: {
        layout: {
            type: 'fit'
        },
        items: [{
            xtype: 'chart',
            background: "none",
            store: 'TemperatureStore',
            animate: true,
            interactions: ['panzoom', 'itemhighlight'],
            legend: {
                position: "bottom"
            },
            series: [{
                type: 'line',
                xField: 'time',
                yField: 'temperature',
                title: 'Temperatures',
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
                position: 'left',
                grid: {
                    odd: {
                        fill: 'lightgray'
                    }
                },
                minZoom: 0.5,
                maxZoom: 2,
                style: {
                    axisLine: true,
                    stroke: 'lightgray'
                }
            }, {
                type: 'time',
                dateFormat: 'd M',
                position: 'bottom',
                minZoom: 0.5,
                maxZoom: 2,
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

