import React, { useState } from 'react'
import { Grid } from '@material-ui/core/';
import Chart from 'react-apexcharts';

const HeatMap = () => {
  const [series, setSeries] = useState([{
    name: "2019-2020",
    data: [{
      x: '2P',
      y: .505
    }, {
      x: '0-3',
      y: .601
    }, {
      x: '3-10',
      y: .439
    }, {
      x: '10-16',
      y: .500
    }, {
      x: '16-3pt',
      y: .500
    }, {
      x: '3P',
      y: .363
    }]
  }, {
    name: "2018-2019",
    data: [{
      x: '2P',
      y: .468
    }, {
      x: '0-3',
      y: .619
    }, {
      x: '3-10',
      y: .343
    }, {
      x: '10-16',
      y: .480
    }, {
      x: '16-3pt',
      y: .407
    }, {
      x: '3P',
      y: .362
    }]
  }, {
    name: "2017-2018",
    data: [{
      x: '2P',
      y: .502
    }, {
      x: '0-3',
      y: .638
    }, {
      x: '3-10',
      y: .380
    }, {
      x: '10-16',
      y: .374
    }, {
      x: '16-3pt',
      y: .445
    }, {
      x: '3P',
      y: .340
    }]
  }
  ])
  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: 'heatmap',
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#008FFB"],
    title: {
      text: 'FG% by Distance'
    },
    plotOptions: {
      heatmap: {
        colorScale: {
          ranges: [{
              from: .0,
              to: .344,
              color: '#002B5C',
              name: 'low',
            },
            {
              from: .345,
              to: .499,
              color: '#F9A01B',
              name: 'medium',
            },
            {
              from: .500,
              to: 1,
              color: '#00471B',
              name: 'high',
            }
          ]
        }
      }
    }
  })
  return(
    <Grid item xs={12}>
      <div id="chart">
        <Chart options={options} series={series} type="heatmap" height={350} />
      </div>
    </Grid>
  )
}

export default HeatMap;