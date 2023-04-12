import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ShoeCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("ProductDetails")}
      className="w-[49vw] p-1"
    >
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
