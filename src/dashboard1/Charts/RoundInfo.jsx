import React from "react";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const RoundInfo = () => {

    const options = {
        colors: ['#017EFA', '#30D987', '#6342FF', '#B37CD2'],
        chart: {
            type: 'pie',
            height:['240px'],
            // margin:[0, 0, 0, 0]
        },
  
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>'
        },
        plotOptions: {
            type: 'variablepie'
        },
        legend : {

            enabled: false,
        },
        series: [{
            name: 'Registrations',
            colorByPoint: true,
            innerSize: '50%',
            data: [{
                name: '67%',
                y: 68.1,
            }, {
                name: '12%',
                y: 11.0
            }, {
                name: '17%',
                y: 11.2
            }],
        }]
    }
    return (<>
    <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    </>);
}
export default RoundInfo;