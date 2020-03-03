import React, { useState } from 'react'
import { Grid } from '@material-ui/core/';
import Chart from 'react-apexcharts';

const LineChart = () => {
  const [series, setSeries] = useState([{data:[20.5,23.8,24.3]}]);
  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      colors: ['#00A9E0']
    },
    title: {
      text: 'PPG per Season',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#753BBD', 'transparent'], 
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['2018', '2019', '2020'],
    }
  },
)
  return(
    <Grid item xs={12}>
      <div id="chart">
        <Chart options={options} series={series} type="line" height={350} />
      </div>
    </Grid>
  )
}

export default LineChart;