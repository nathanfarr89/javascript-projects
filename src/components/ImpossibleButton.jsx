import React, { useState } from 'react';
import { Button, Grid } from '@material-ui/core/';

const ImpossibleButton = () => {
  const [btnStyle, setBtnStyle] = useState({
    position: 'absolute',
    top: '200px',
    left: '200px',
  });
  const [buttonColor, setButtonColor] = useState('primary');

  const [buttonText, setButtonText] = useState('Try To Click Me!')
  
  const moveButton = () => {
    const randTop = Math.floor(Math.random() * Math.floor(window.innerHeight-300));
    const randLeft = Math.floor(Math.random() * Math.floor(window.innerWidth-300));

    setBtnStyle({
      top: `${randTop}px`,
      left: `${randLeft}px`,
    })
  }

  const success = () => {
    setButtonText('You Got Me!')
    setButtonColor('secondary')
  }
  
  const reset = () => {
    setButtonText('Try To Click Me!')
    setButtonColor('primary')
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} />
      <Grid item xs={4}>
          <Button style={btnStyle} variant="contained" color={buttonColor} onMouseEnter={moveButton} onMouseLeave={reset} onClick={success}>
            {buttonText}
          </Button>
      </Grid>
      <Grid item xs={4} />
    </Grid>
  );
}

export default ImpossibleButton;
