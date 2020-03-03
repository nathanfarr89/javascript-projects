import React, { useState } from 'react';
import { Grid } from '@material-ui/core/';
import Chart from 'react-apexcharts';
import Don from '../assets/donovanMtn.jpeg';
import Logo from '../assets/jazzMtnLogo.jpeg';

const PieChart = () => {
  const [series, setSeries] = useState([4.7, 31.3 ])
  const [options, setOptions] = useState({
    chart: {
      width: 380,
      type: 'pie',
    },
    colors: ['#93C3EE', '#E5C6A0'],
    fill: {
      type: 'image',
      opacity: 0.85,
      image: {
         src: [Don, Logo],
        width: 150,
        height: 150
      },
    },
    title: {
      text: '2029-2020 Win Shares',
      align: 'left'
    },
    stroke: {
      width: 4
    },
    labels: ['Donovan Mitchell', 'Rest of Team'],
    dataLabels: {
      enabled: false
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  })
  return(
    <Grid item xs={5}>
      <div id="chart">
        <Chart options={options} series={series} type="pie" height={350} />
      </div>
    </Grid>
  )
};

export default PieChart;