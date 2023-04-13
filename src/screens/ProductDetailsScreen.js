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
import BigButton from "../components/BigButton";
import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "../store/cartSlice";

const ProductDetailsScreen = () => {
  const product = useSelector((state) => state.products.selectedProduct);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartSlice.actions.addCartItem({ product }));
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
      <BigButton absolute title={"Add to Cart"} onPress={addToCart} />
    </View>
  );
};

export default ProductDetailsScreen;
