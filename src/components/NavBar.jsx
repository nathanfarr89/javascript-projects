import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography  } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import ImpossibleButton from './ImpossibleButton';
import CoinGame from './CoinGame';
import PlayerStats from './PlayerStats';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = event => {
    console.log(isMenuOpen)
    setIsMenuOpen(true);
    setAnchorEl(event.currentTarget);
    
  };

  const handleClose = event => {
    setIsMenuOpen(false);
  };

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={isMenuOpen}
              onClose={handleClose}
            >
              <MenuItem>
                <Link onClick={handleClose} className="MenuLink" to="/coin-game">Coin Game</Link>
              </MenuItem>
              <MenuItem>
                <Link onClick={handleClose} className="MenuLink" to="/impossible-button">Impossible Button</Link>
              </MenuItem>
              <MenuItem>
                <Link onClick={handleClose} className="MenuLink" to="/player-stats">Player Stats</Link>
              </MenuItem>
            </Menu>
          
          <Typography variant="h6" className={classes.title}>
            <Link to="/">Home</Link>
          </Typography>
        </Toolbar>
      </AppBar>

      <Switch>
          <Route path="/player-stats">
            <PlayerStats />
          </Route>
          <Route path="/coin-game">
            <CoinGame />
          </Route>
          <Route path="/impossible-button">
            <ImpossibleButton />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  )
}

export default NavBar;
