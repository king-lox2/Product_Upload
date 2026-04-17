import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ActivityIndicator
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const ProductForm = ({ onSubmit, isLimitReached }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      alert("Permission required");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    if (!name || !price || isLimitReached) return;

    setLoading(true);

    setTimeout(() => {
      const newProduct = {
        name,
        price,
        image: image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4IF8WA83WSNBBKoZrwWusLVv_hZjOiAB0zLqTo8vnbJmOa2lnJOUQHyJE&s=10"
      };

      onSubmit(newProduct);

      setName("");
      setPrice("");
      setImage(null);
      setLoading(false);
    }, 500);
  };

  return (
    <View style={{
      backgroundColor: "#fff",
      padding: 16,
      borderRadius: 10,
      marginBottom: 20,
      elevation: 2
    }}>
      <TextInput
        placeholder="Product Name"
        value={name}
        onChangeText={setName}
        style={{
          borderWidth: 1,
          borderColor: "#ddd",
          marginBottom: 10,
          padding: 10,
          borderRadius: 8
        }}
      />

      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={{
          borderWidth: 1,
          borderColor: "#ddd",
          marginBottom: 10,
          padding: 10,
          borderRadius: 8
        }}
      />

      <TouchableOpacity onPress={pickImage}>
        <Text style={{ marginBottom: 25, color: "#007bff", marginTop:15 }}>
          {image ? "Change Image" : "Select Image"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleSubmit}
        disabled={isLimitReached || loading}
        style={{
          backgroundColor: isLimitReached ? "#ccc" : "#007bff",
          padding: 12,
          borderRadius: 8,
          alignItems: "center"
        }}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            {isLimitReached ? "Limit Reached" : "Add Product"}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ProductForm;