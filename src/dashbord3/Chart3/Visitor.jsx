
import React from 'react';
import Highcharts from 'highcharts';
import {
    HighchartsChart, withHighcharts
} from 'react-jsx-highcharts';
import _ from 'lodash';
import * as ChartModuleMore from 'highcharts/highcharts-more.js';
ChartModuleMore(Highcharts);

const Visitor = (props) => {
  
    const chart = {
        marginRight: 0,
        backgroundColor: 'transparent'
    }

    const xAxis ={
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
            borderRadius: 10
        }
    }

   const series= [{
        name: 'Installation',
        data: [8024, 10723, 9000, 4500, 5456, 5376, 15221, 13675, 14778, 10565, 13456, 19795],
        color: '#30D987',
        borderRadius: '50%'
    }, {
        name: 'Manufacturing',
        data: [10467, 11865, 13365, 5043, 4234, 9532, 8045, 6876, 10678, 9165, 8456, 9895],
        color: '#017EFA',
        borderRadius: '50%'
    }, {
        name: 'Sales & Distribution',
        data: [ 1065, 1765, 3043, 2234, 5532, 3045, 6876, 4567, 3678, 6765, 5456, 2895 ],
        color: '#FD1F9B',
        borderRadius: '50%'
    }];

    const chartooltip = {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f} ta</b><br/>',
        
    }
    const chartpane = {
        size: '100%',
        backgroundColor:'transparent'
    }
    const legend = {
    
        enabled: false,
    }

   

    return (
        <div style={{ width: '100%', background:'transparent'}}>

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

export default withHighcharts(Visitor, Highcharts);