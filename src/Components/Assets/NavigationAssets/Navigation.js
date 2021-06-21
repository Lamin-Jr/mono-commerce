import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core/';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';

//Navigation Style Import
import NavigationStyle from '../Styles/NavigationStyle';

//Router Import
import { useLocation, Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

const Navigation = props => {
  const classes = NavigationStyle();
  const { pathname } = useLocation();

  return (
    <div>
      <AppBar
        position="static"
        className={pathname !== '/' ? classes.rootForBag : classes.rootForHome}
      >
        
          <Grid container spacing={1} className={classes.Gridroot}>
            <Grid item xs>
              <Typography className={classes.CollectionContainer}>
                <Link to="/" className={classes.CollectionItems}>
                  NEW ARRIVALS
                </Link>
                <Link to="/" className={classes.CollectionItems}>
                  SHOP
                </Link>
                <Link to="/" className={classes.CollectionItems}>
                  COLLECTING
                </Link>
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="h6" className={classes.LogoDiv}>
                <Link to="/" className={classes.LogoText}>
                  MODNIKKY
                </Link>
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography className={classes.functionalLinksContainers}>
                <Link to="/" className={classes.functionalLinksItems}>
                  <SearchIcon />
                  Search
                </Link>
                <Link to="/" className={classes.functionalLinksItems}>
                  SIGNIN
                </Link>
                <Link to="/bag" className={classes.functionalLinksItems}>
                  BAG {props.BagItem}
                </Link>
                <Link to="/" className={classes.functionalLinksItems}>
                  <FavoriteBorderIcon />
                </Link>
              </Typography>
            </Grid>
          </Grid>
        
      </AppBar>
    </div>
  );
};
export default Navigation;
