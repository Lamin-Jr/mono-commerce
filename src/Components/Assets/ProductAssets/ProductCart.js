import React, { useState } from "react";
import { GridList, Typography, GridListTile } from "@material-ui/core/";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import ProductCartStyle from "../Styles/ProductCartStyle";
import { useLocation, Link } from "react-router-dom";

const ProductCart = (props) => {
  const classes = ProductCartStyle();

  //State to listen to the event on the product card On the HomePage
  const [addToCartHover, setAddToCart] = useState(classes.addToBagBtnDivHide);

  //Product On home page hover Show and Hide
  const onCartHover = () => setAddToCart(classes.addToBagBtnDivShow);
  const HandleCartOnMouseLeave = () => setAddToCart(classes.addToBagBtnDivHide);

  return (
    <div className={classes.root}>
      <Typography className={classes.divTitle}>NEW ARRIVALS</Typography>
      <GridList cellHeight={200} spacing={0} className={classes.gridList}>
        {props.Data.map((product, i) => (
          // <Link to="/shop" className={classes.sigleProductDis} >
          <GridListTile
            key={i}
            onMouseOver={onCartHover}
            onMouseLeave={HandleCartOnMouseLeave}
          >
            <Link to="/singleproductpage">
              <img
                src={product.img}
                alt={product.title}
                className={classes.sigleProductDis}
              />
            </Link>
            <img src={product.img} alt={product.title} />
            <div className={addToCartHover}>
              <button
                className={classes.addToBagBtn}
                onClick={() => props.onAddToCart(product)}
              >
                <LocalMallIcon />
                <span>ADD TO BAG</span>
              </button>
            </div>
          </GridListTile>
          // </Link>
        ))}
      </GridList>
    </div>
  );
};
export default ProductCart;
