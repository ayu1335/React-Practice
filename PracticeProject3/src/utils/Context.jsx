import React, { createContext, useEffect, useState } from "react";
import instance from "./axios";
export const ProductContext = createContext();
const Context = (props) => {
  const [products, setproducts] = useState(
    null || JSON.parse(localStorage.getItem("products"))
  );

  // const getProduct = async () => {
  //   try {
  //     const { data } = await instance("/products");
  //     setproducts(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getProduct();
  // }, []);

  return (
    <ProductContext.Provider value={[products, setproducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;
