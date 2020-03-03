import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core/';
import WalkingGuy from '../assets/walkingGuy.gif';
import Coin from '../assets/coin.gif';

const CoinGame = () => {
  const [wGStyle, setWGStyle] = useState({
    width: '50px',
    height: '100px',
    position: 'absolute',
    top: '100px',
    left: '100px',
    }
  )

  const [coinStyle, setCoinStyle] = useState({
    width: '250px',
    height: '150px',
    position: 'absolute',
    top: '50px',
    left: '200px',
    }
  )

  const isTouching = () => {
    const coinLeft = parseInt(coinStyle.left.split('px')[0])
    const wGLeft = parseInt(wGStyle.left.split('px')[0])

    const topOptions = [100, 200, 300, 400, 500, 600, 700, 800]
    const leftOptions = [100, 200, 300, 400, 500, 600, 700, 800]
    const randTop = Math.floor(Math.random()*8)
    const randLeft = Math.floor(Math.random()*8)

    if (wGStyle.top === coinStyle.top && wGLeft - coinLeft  === 100 ) {
      setCoinStyle({
        width: '250px',
        height: '150px',
        position: 'absolute',
        top: `${topOptions[randTop]}px`,
        left: `${leftOptions[randLeft]}px`,
      })
    }
  }

  const keyPressed = event => {
    isTouching();
    switch(event.key) {
      case 'ArrowUp':
        const goUp = (parseInt(wGStyle.top.split('px')[0]) - 50) + 'px'
        setWGStyle({
          width: '50px',
          height: '100px',
          position: 'absolute',
          top: goUp,
          left: wGStyle.left,
          })
        break;
      case 'ArrowDown':
        const goDown = (parseInt(wGStyle.top.split('px')[0]) + 50) + 'px'
        setWGStyle({
          width: '50px',
          height: '100px',
          position: 'absolute',
          top: goDown,
          left: wGStyle.left,
          })
        break;
      case 'ArrowRight':
      const goRight = (parseInt(wGStyle.left.split('px')[0]) + 50) + 'px'
      setWGStyle({
        width: '50px',
        height: '100px',
        position: 'absolute',
        top: wGStyle.top,
        left: goRight,
        })
      break;
      case 'ArrowLeft':
        const goLeft = (parseInt(wGStyle.left.split('px')[0]) - 50) + 'px'
      setWGStyle({
        width: '50px',
        height: '100px',
        position: 'absolute',
        top: wGStyle.top,
        left: goLeft,
        })
      break;
      default: 
        break;
    }
  }

  useEffect(isTouching, [ wGStyle,coinStyle ] );

  return(
    <Grid container spacing={3}>
      <Grid item xs={12} >
        <img src={WalkingGuy} tabIndex={-1} onKeyUp={keyPressed} alt="walking guy" style={wGStyle} />
      </Grid>
      <Grid item xs={12}>
        <img src={Coin} alt="coin" style={coinStyle} />
      </Grid>
    </Grid>
  )

};

export default CoinGame;
