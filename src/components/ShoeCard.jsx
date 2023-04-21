import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { productsSlice } from "../store/productsSlice";
import { transition } from "../utils";
import Animated from "react-native-reanimated";
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const ShoeCard = ({ item }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handlePress = () => {
    // update selected product
    dispatch(productsSlice.actions.setSelectedProduct(item.id));

    navigation.navigate("ProductDetails");
  };
  return (
    <AnimatedPressable onPress={handlePress} className="w-[49vw] p-1">
      <Animated.Image
        className="w-full aspect-square"
        source={{
          uri: item.image,
        }}
        sharedTransitionTag={`shared_${item.id}`}
        // sharedTransitionStyle={transition}
      />
    </AnimatedPressable>
  );
};

export default ShoeCard;
