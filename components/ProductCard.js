import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Animated, { FadeInDown, FadeOut } from "react-native-reanimated";
import { ProductContext } from "../context/ProductContext";

const ProductCard = ({ product, index }) => {
  const { deleteProduct } = useContext(ProductContext);

  return (
    <Animated.View
      entering={FadeInDown.duration(400)}
      exiting={FadeOut}
      style={{
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: 15,
        overflow: "hidden",
        elevation: 2
      }}
    >
    <View >
        <Image
        source={{ uri: product.image }}
        style={{ width: "100%", height: 150 }}
      />

      <View style={{ padding: 12, }}>
        <Text style={{
          fontSize: 16,
          fontWeight: "bold",
          marginBottom: 4
        }}>
          {product.name}
        </Text>

        <Text style={{ fontSize: 14, color: "#555" }}>
          ₦{product.price}
        </Text>

        <TouchableOpacity
          onPress={() => deleteProduct(index)}
          style={{
            marginTop: 10,
            backgroundColor: "red",
            padding: 8,
            borderRadius: 6,
            alignItems: "center"
          }}
        >
          <Text style={{ color: "#fff" }}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
    </Animated.View>
  );
};

export default ProductCard;