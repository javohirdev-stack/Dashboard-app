import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
    chart: {
        type: 'column',
        backgroundColor: 'transparent',
        height:'250px'
    },

    title: {
        text: ''
    },
      xAxis:{
        crosshair:{
            className:undefined,
            color:'#fff',
            dashStyle: 'solid',
            snap:false,
            width:'80px',
            zIndex:2,
            
            }

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
    <div style={{width:'100%'}}>

              <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    </div>
  
    </>);
}
export default Audence;