import React, { useEffect } from "react";
import ProductAPI from "../../Components/Data/ProductData.json";
import ProductCart from "../Assets/ProductAssets/ProductCart";

const SingleProductPage = () => {
  const data = ProductAPI;
  console.log(data);
  return <div>This is Single Product Page</div>;
};
export default SingleProductPage;
