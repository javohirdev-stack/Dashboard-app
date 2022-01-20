import React from 'react';
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
            borderRadius: 5
        }
    }

   const series= [{
        name: 'Installation',
        data: [1024, 2723, 3000, 3500, 4456, 3376, 2221, 3675, 6778, 5565, 8456, 7795]
    }, {
        name: 'Manufacturing',
        data: [2467, 7865, 3765, 6043, 1234, 6532, 2045, 9876, 4678, 7765, 3456, 9895]
    }, {
        name: 'Sales & Distribution',
        data: [ 5865, 1765, 8043, 2234, 9532, 4045, 7876, 4567, 6678, 4765, 8456, 2895 ],
        color: 'red'
    }];

    const chartooltip = {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f} ta</b><br/>'
    }
    const chartpane = {
        size: '100%'
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
            >
            </HighchartsChart>

        </div>
    );

}

export default withHighcharts(ChartLine, Highcharts);