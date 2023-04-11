import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import products from "../data/products";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ProductDetailsScreen = () => {
  const insets = useSafeAreaInsets();
  const product = products[0];

  const addToCart = () => {
    console.warn("Added to Cart");
  };

  return (
    <View className="pb-0 mb-0">
      <ScrollView>
        <FlatList
          data={product.images}
          // keyExtractor={(item) => item.indexOf}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} className="w-[100vw] aspect-square" />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View className="m-5">
          <Text className="text-[34px] font-medium my-[10]">
            {product.name}
          </Text>
          <Text className="text-base font-medium">${product.price}</Text>
          <Text className="my-[5] text-lg font-light leading-8">
            {product.description}
          </Text>
        </View>
      </ScrollView>
      <Pressable
        onPress={addToCart}
        className={`absolute bottom-[${insets.bottom}] bg-black p-5 self-center rounded-full w-[90%]`}
      >
        <Text className="text-white text-center text-base font-medium">
          Add To Cart
        </Text>
      </Pressable>
    </View>
  );
};

export default ProductDetailsScreen;
