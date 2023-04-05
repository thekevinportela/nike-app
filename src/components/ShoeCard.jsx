import { View, Text, Image, Pressable } from "react-native";
import React from "react";

const ShoeCard = ({ item }) => {
  return (
    <Pressable className="w-[49vw] p-1">
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
