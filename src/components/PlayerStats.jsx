import React from 'react';
import { Grid } from '@material-ui/core/';
import LineChart from './LineChart';
import HeatMap from './HeatMap';
import PieChart from './PieChart';
import Radar from './Radar';

const PlayerStats = () => {
 
  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <h1>Donovan Mitchell</h1>
      </Grid>
      <LineChart />
      <HeatMap />
      <PieChart />
      <Grid item xs={2} />
      <Radar />
    </Grid>
  )
}

export default PlayerStats;