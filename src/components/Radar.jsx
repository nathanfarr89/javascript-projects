import React, { useState } from 'react';
import { Grid } from '@material-ui/core/';
import Chart from 'react-apexcharts';

const Radar = () => {
  const [series, setSeries] = useState([{
    name: 'Series 1',
    data: [.457, .519, .457, .561],
  }])
  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: 'radar',
    },
    dataLabels: {
      enabled: true
    },
    plotOptions: {
      radar: {
        size: 140,
        polygons: {
          strokeColor: '#e9e9e9',
          fill: {
            colors: ['#C5CFD4', '#fff']
          }
        }
      }
    },
    title: {
      text: '2019-2020 Shooting %'
    },
    colors: ['#3E2680'],
    markers: {
      size: 4,
      colors: ['#fff'],
      strokeColor: '#3E2680',
      strokeWidth: 2,
    },
    tooltip: {
      y: {
        formatter: function(val) {
          return val
        }
      }
    },
    xaxis: {
      categories: ['FG% Per Game', 'eFG% Per Game', 'FG% per 36', 'TS%']
    },
    yaxis: {
      show: false,
      max: 1
    }
  },
);

  return (
    <Grid item xs={5}>
      <div id="chart">
        <Chart options={options} series={series} type="radar" height={350} />
      </div>
    </Grid>
  )
}

export default Radar;
