import React from "react";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const RoundInfo = () => {

    const options = {
        colors: ['#017EFA', '#71BF45', '#FAA74B', '#B37CD2'],
        chart: {
            type: 'pie',
          
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
            innerSize: '30%',
            data: [{
                name: 'EV',
                y: 68.1,
            }, {
                name: 'Hybrids',
                y: 11.0
            }, {
                name: 'Diesel',
                y: 11.2
            }, {
                name: 'Petrol',
                y: 9.7
            }]
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