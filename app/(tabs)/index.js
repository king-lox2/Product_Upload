import React from "react"
import { View } from "react-native";
import { ProductProvider } from "../../context/ProductContext";
import HomeScreen from "../../components/HomeScreen";

export default function App() {
  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#f9f9f9", margin:36}}>
      
      <ProductProvider>
      <HomeScreen />
    </ProductProvider>
    </View>
  );
}