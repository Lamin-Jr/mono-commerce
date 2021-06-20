import React from 'react';
import { GridList, Typography, GridListTile } from '@material-ui/core';
import InstagramData from '../../Data/InstagramData.json';
import InstaCartStyle from '../Styles/InstaCartStyle';

const InstagramCart = () => {
  const classes = InstaCartStyle();
  const instaImg = InstagramData.slice(0, 1).map(img => {
    return `url(${img.img})`;
  });
  return (
    <div className={classes.root}>
      <Typography className={classes.titleDiv}>
        <span>SHOP INSTAGRAM </span> <div>SHOP ></div>
      </Typography>
      <div
        className={classes.firstImg}
        style={{
          backgroundImage: `${instaImg}`,
        }}
      ></div>

      <GridList cellHeight={150} className={classes.gridList} cols={3}>
        {InstagramData.slice(0, 4).map((tile, i) => (
          <GridListTile key={i} cols={2}>
            <img src={tile.img} alt={tile.title} />
            {tile.title}
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default InstagramCart;
