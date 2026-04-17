import React, { useContext } from "react";
import { View, Text, FlatList, Alert } from "react-native";
import { ProductContext } from "../context/ProductContext";
import ProductForm from "./ProductForm";
import ProductCard from "./ProductCard";

const HomeScreen = () => {
  const { products, addProduct, MAX_PRODUCTS } = useContext(ProductContext);

  const handleAddProduct = (product) => {
    const success = addProduct(product);

    if (!success) {
      Alert.alert("Limit Reached", "You can only add up to 5 products.");
    }
  };

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#f9f9f9", }}>
      
      {/* Product Count */}
      <Text style={{
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10
      }}>
        {products.length}/{MAX_PRODUCTS} Products
      </Text>

      <ProductForm
        onSubmit={handleAddProduct}
        isLimitReached={products.length >= MAX_PRODUCTS}
      />

      {/* Empty State */}
      {products.length === 0 ? (
        <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 40
        }}>
          <Text style={{ fontSize: 50, marginBottom: 10 }}>
            📦
          </Text>

          <Text style={{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 8,
            color: "#333"
          }}>
            No products yet
          </Text>

          <Text style={{
            fontSize: 14,
            color: "#777",
            textAlign: "center",
            paddingHorizontal: 20
          }}>
            Start by adding your first product using the form above.
          </Text>
        </View>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <ProductCard product={item} index={index} />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default HomeScreen;