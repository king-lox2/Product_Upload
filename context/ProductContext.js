import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const MAX_PRODUCTS = 5;

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await AsyncStorage.getItem("products");
      if (data) setProducts(JSON.parse(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    saveProducts();
  }, [products]);

  const saveProducts = async () => {
    try {
      await AsyncStorage.setItem("products", JSON.stringify(products));
    } catch (error) {
      console.log(error);
    }
  };

  const addProduct = (product) => {
    if (products.length >= MAX_PRODUCTS) return false;
    setProducts((prev) => [...prev, product]);
    return true;
  };

  const deleteProduct = (index) => {
    setProducts((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, deleteProduct, MAX_PRODUCTS }}
    >
      {children}
    </ProductContext.Provider>
  );
};