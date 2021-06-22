import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close';
import BagCardStyles from '../Styles/BagCardStyle';

const BagCard = props => {
  const [BagData,setBData ]= useState(props.AddToBagData);
  const classes = BagCardStyles();
  useEffect(() => {
    setBData(props.AddToBagData);
  }, [props.AddToBagData]);

  return (
    <div className={classes.root}>
      {BagData.map((product, i) => (
        <Card className={classes.BagCardRoot} key={i}>
          <div className={classes.imageDiv}>
            <CardMedia
              className={classes.image}
              image={product.img}
              title="Live from space album cover"
            />
          </div>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h6" variant="h6" className={classes.title}>
                {product.title}
              </Typography>
              <Typography color="textSecondary">
                Price ${product.price}
              </Typography>
              <Typography color="textSecondary">
                color: {product.color}
              </Typography>
              <Typography color="textSecondary">
                Size: {product.size}
              </Typography>
              <Typography color="textSecondary">
                Quantity:
                <select
                  name="cars"
                  id="cars"
                  className={classes.quantityOption}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </Typography>
            </CardContent>
          </div>
          <div className={classes.deletButtonDiv}>
            <Button
              variant="contained"
              className={classes.button}
              startIcon={<CloseIcon />}
              onClick={() => props.onRemoveFromBag(i)}
            >
              REMOVE
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default BagCard;
