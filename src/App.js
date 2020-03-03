import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <Box component="span" m={1}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <NavBar />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
