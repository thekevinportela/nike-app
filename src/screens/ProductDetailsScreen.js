import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
  Pressable,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import products from "../data/products";
import BigButton from "../components/BigButton";
import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "../store/cartSlice";
import { transition } from "../utils";
import Animated, {
  Extrapolate,
  FadeIn,
  FadeInDown,
  FadeOut,
  SlideInDown,
  SlideInRight,
  SlideInUp,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ProductDetailsScreen = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const product = useSelector((state) => state.products.selectedProduct);
  const dispatch = useDispatch();
  const [exiting, setExiting] = useState(false);

  const addToCart = () => {
    dispatch(cartSlice.actions.addCartItem({ product }));
  };

  const goBack = () => {
    setExiting(true);
    setTimeout(() => {
      navigation.goBack();
    }, 10);
  };

  const translationY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationY.value = event.contentOffset.y;
  });

  const insets = useSafeAreaInsets();

  const animatedStyle = useAnimatedStyle(() => {
    console.log("translation y", translationY.value);
    const opacity = interpolate(
      translationY.value,
      [0, width - 100, width],
      [0, 0, 1]
    );

    return {
      opacity,
      position: "absolute",
      top: 0,
      paddingTop: insets.top,
      height: 100,
      width: "100%",
      backgroundColor: "#F8F8F8",
      zIndex: 9,
      justifyContent: "flex-end",
      alignItems: "center",
      borderBottomWidth: 0.333,
      paddingBottom: 10,
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      translationY.value,
      [0, width - 100, width],
      [0, 0, 100],
      Extrapolate.CLAMP
    );
    // const translateY = translationY.value >= width ? translationY.value : 0;
    const translateY = interpolate(
      translationY.value,
      [0, width - 100, width],
      [0, 0, translationY.value - width]
    );

    return {
      transform: [{ translateX }, { translateY }],
    };
  });

  return (
    <View className="pb-0 mb-0 flex-1">
      <Animated.View
        className="absolute z-10 left-5 "
        style={{ opacity: exiting ? 0 : 1, top: insets.top + 10 }}
        entering={FadeIn.delay(550)}
        exiting={FadeOut}
      >
        <Pressable onPress={goBack}>
          <Text>BACK</Text>
        </Pressable>
      </Animated.View>
      <Animated.View style={animatedStyle}>
        <Text className="text-lg font-semibold">{product.name}</Text>
      </Animated.View>
      <Animated.ScrollView onScroll={scrollHandler} scrollEventThrottle={16}>
        <FlatList
          data={product.images}
          // keyExtractor={(item) => item.indexOf}
          renderItem={({ item, index }) => {
            if (index === 0) {
              return (
                <Animated.Image
                  source={{ uri: product.image }}
                  className="w-[100vw] aspect-square"
                  sharedTransitionTag={`shared_${product.id}`}
                  // sharedTransitionStyle={transition}
                />
              );
            }

            return (
              <Image
                source={{ uri: item }}
                className="w-[100vw] aspect-square"
              />
            );
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View className="m-5">
          <Animated.Text
            entering={FadeInDown.delay(250).duration(500)}
            className="text-[34px] font-medium my-[10]"
            // style={animatedTextStyle}
          >
            {product.name}
          </Animated.Text>
          <Animated.View entering={FadeInDown.delay(350).duration(500)}>
            <Text className="text-base font-medium">${product.price}</Text>
            <Text className="my-[5] text-lg font-light leading-8">
              {product.description}
            </Text>
          </Animated.View>
        </View>
        <View className="h-96">
          <Text>recommended shoes:</Text>
        </View>
      </Animated.ScrollView>

      <Animated.View entering={FadeInDown.delay(450).duration(500)}>
        <BigButton absolute title={"Add to Cart"} onPress={addToCart} />
      </Animated.View>
    </View>
  );
};

export default ProductDetailsScreen;
