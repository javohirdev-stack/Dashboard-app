import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
    chart: {
        type: 'column',
        backgroundColor: 'transparent'
    },

    title: {
        text: 'Styling axes and columns'
    },

    yAxis: [{
        className: 'highcharts-color-0',
        title: {
            text: 'Primary axis'
        }
    }, {
        className: 'highcharts-color-1',
        opposite: true,
        title: {
            text: 'Secondary axis'
        }
    }],

    plotOptions: {
        column: {
            borderRadius: 5
        }
    },

    series: [{
        data: [1, 3, 2, 4],
        color: '#017EFA'
    }, {
        data: [324, 124, 547, 221],
        yAxis: 1
    }]
}

const Audence = () => {
    return (<>
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    </>);
}
export default Audence;