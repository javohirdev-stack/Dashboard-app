import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import {
    HighchartsChart, withHighcharts
} from 'react-jsx-highcharts';
import _ from 'lodash';
import * as ChartModuleMore from 'highcharts/highcharts-more.js';
ChartModuleMore(Highcharts);

const ChartLine = (props) => {


    const chart = {
        marginRight: 0,
        loading: {
            hideDuration: 5000
        }
    }
    const labels = {
        style: {
            backgroundColor: 'blue',
        }
    }
    const xAxis = {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    };

    const yAxis = [{
        id: "y_axis_0",
        title: {
            text: "",
        }
    }]
    const plotOptions = {
        column: {
            borderRadius: 20,

        }
    }

    const series = [
        {
            name: 'Installation',
            data: [8024, 10723, 9000, 6500, 7456, 9376, 15221, 13675, 14778, 10565, 13456, 19795],
            color: '#30D987',
       
        }, {
            name: 'Manufacturing',
            data: [10467, 11865, 13365, 10043, 12234, 9532, 8045, 6876, 10678, 9165, 8456, 9895],
            color: '#017EFA'
        }, {
            name: 'Sales & Distribution',
            data: [1200, 2765, 2043, 4234, 5332, 5945, 6586, 5567, 6878, 4005, 5856, 6995],
            color: '#FD1F9B'
        },
       
        
      
    ];



    const chartooltip = {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f} ta</b><br/>',
    }

    const chartpane = {
        size: '90%',
        backgroundColor: 'blue'
    }

    const legend = {
        enabled: false,
    }

    return (
        <div style={{ width: '100%' }}>

            <HighchartsChart
                chart={chart}
                series={series}
                yAxis={yAxis}
                xAxis={xAxis}
                plotOptions={plotOptions}
                tooltip={chartooltip}
                pane={chartpane}
                legend={legend}
                labels={labels}
            >
            </HighchartsChart>

        </div>
    );

}

export default withHighcharts(ChartLine, Highcharts);