// ProductContext.js
import { createContext, useState,useEffect } from "react";
import data from "../db/data.json"; // Adjust the path as necessary

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products] = useState(data); // Initialize state with data from JSON

  // Initialize cart IDs from localStorage or default to an empty array
  const [cartItemIds, setCartItemIds] = useState(() => {
    const storedCart = localStorage.getItem("cartItemIds");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItemIds", JSON.stringify(cartItemIds));
  }, [cartItemIds]);

  const addToCart = (productId) => {
    if (!cartItemIds.includes(productId)) {
      setCartItemIds([...cartItemIds, productId]);
    }
  };

  // Remove a product ID from the cart
  const removeFromCart = (productId) => {
    setCartItemIds(cartItemIds.filter((id) => id !== productId));
  };


  //clear the cart
  const clearCart = () => {
    setCartItemIds([]);
  };

  const cartItems = products.filter((product) => cartItemIds.includes(product.product_id));

  return (
    <ProductContext.Provider
      value={{ products, addToCart, removeFromCart, clearCart, cartItems, cartItemIds }}
    >
      {children}
    </ProductContext.Provider>
  );
};
