import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { productsSlice } from "../store/productsSlice";

const ShoeCard = ({ item }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handlePress = () => {
    // update selected product
    dispatch(productsSlice.actions.setSelectedProduct(item.id));

    navigation.navigate("ProductDetails");
  };
  return (
    <Pressable onPress={handlePress} className="w-[49vw] p-1">
      <Image
        className="w-full aspect-square"
        source={{
          uri: item.image,
        }}
      />
    </Pressable>
  );
};

export default ShoeCard;
