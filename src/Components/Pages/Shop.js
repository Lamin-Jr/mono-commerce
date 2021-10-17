import React, { Component } from "react";
import ProductCart from "../Assets/ProductAssets/ProductCart";
import PrpductApi from "../Data/ProductData.json";
const Shop = () => {
  const data = PrpductApi;
  return (
    <div>
      <div>
        <ProductCart Data={data} />
      </div>
    </div>
  );
};
export default Shop;
