import React from 'react';
import { Grid, Paper } from '@material-ui/core/';

const Home = () => {

  return (
    <Grid container spacing={3}>
      <Grid item xs={4} />
      <Grid item xs={4}>
        <Paper elevation={3}>
          <h1>Nate's Javascript Projects</h1>
        </Paper>
      </Grid>
      <Grid item xs={4} />
    </Grid>
  );
}

export default Home;