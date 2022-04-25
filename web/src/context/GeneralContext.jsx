import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const GeneralContext = createContext([]);

export const GeneralProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [cart, setToCart] = useState([]);
  const callApi = async () => {
    const url = "https://fakestoreapi.com/products";
    const req = await axios.get(url);

    setAllProducts(req.data);
  };
  useEffect(() => {
    callApi();
  }, []);
  const data = {
    allProducts: allProducts,
    cart: cart,
    setToCart: setToCart,
  };
  return (
    <GeneralContext.Provider value={data}>{children}</GeneralContext.Provider>
  );
};
