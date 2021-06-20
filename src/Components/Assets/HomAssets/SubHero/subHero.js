import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import heroData from '../../../Data/heroData.json';
import SubHeroStyles from '../../Styles/SubHeroStyle';

export default function AdvancedGridList() {
  const classes = SubHeroStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {heroData.map((tile, i) => (
          <GridListTile key={i}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
