
import React from 'react';
import Highcharts from 'highcharts';
import {
    HighchartsChart, withHighcharts
} from 'react-jsx-highcharts';
import _ from 'lodash';
import * as ChartModuleMore from 'highcharts/highcharts-more.js';
ChartModuleMore(Highcharts);

const ContentReach = (props) => {

    const chart = {
        marginRight: 0,
        backgroundColor: 'transparent',
        type: 'spline'
    }

    const xAxis = {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true,
        
        backgroundColor: {
            linearGradient: {
              x1: 0,
              x2: 1,
            },
        },
    };

    const yAxis = [{
        id: "y_axis_0",
        title: {
            text: "",
        }
    }]
    const plotOptions = {
        column: {
            borderRadius: 10
        }
    }



    const series = [{
        name: 'Sales & Distribution',
        
        data: [10467, 11865, 13365, 5043, 4234, 9532, 8045, 6876, 10678, 9165, 8456, 9895],
        color: '#FD1F9B',
         
        borderRadius: '50%'
    }, {
        name: 'Manufacturing',
        data: [6065, 6765, 7043, 7534, 7032, 7745, 8876, 8567, 9678, 9765, 10456, 9895],
        type: 'area',
        color: '#017EFA',
        borderRadius: '50%',
        clip:true,
        colorAxis: 'blue' ,
        fillColor: {
            linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            },
            stops: [
                [0, Highcharts.getOptions().colors[0]],
                [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
            ]


        },
        threshold: null
    }];

    const chartooltip = {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f} ta</b><br/>',

    }
    const chartpane = {
        size: '100%',
        backgroundColor: 'transparent'
    }
    const legend = {

        enabled: false,
    }



    return (
        <div style={{ background: 'transparent' }}>

            <HighchartsChart
                chart={chart}
                series={series}
                yAxis={yAxis}
                xAxis={xAxis}
                plotOptions={plotOptions}
                tooltip={chartooltip}
                pane={chartpane}
                legend={legend}
            >
            </HighchartsChart>

        </div>
    );

}

export default withHighcharts(ContentReach, Highcharts);