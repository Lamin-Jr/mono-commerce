import React from 'react';
import { AppBar, Typography } from '@material-ui/core/';

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
            
              <Typography className={classes.CollectionContainer}>
                <Link to="/" className={classes.CollectionItems}>
                  NEW ARRIVALS
                </Link>
                <Link to="/shop" className={classes.CollectionItems}>
                  SHOP
                </Link>
                <Link to="/shop" className={classes.CollectionItems}>
                  COLLECTING
                </Link>
              </Typography>
            
           
              <Typography variant="h6" className={classes.LogoDiv}>
                <Link to="/" className={classes.LogoText}>
                  MODNIKKY
                </Link>
              </Typography>
            
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
        
      </AppBar>
    </div>
  );
};
export default Navigation;
