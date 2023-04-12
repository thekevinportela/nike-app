import { View, Text } from "react-native";
import React from "react";

const ShoppingCartTotals = () => {
  return (
    <>
      <View className="border-gray-300 border-t pb-3" />
      <View className="flex-row justify-between">
        <Text className="text-gray-500 text-base">Subtotal</Text>
        <Text className="text-gray-500 text-base">$410.00</Text>
      </View>
      <View className="flex-row justify-between">
        <Text className="text-gray-500 text-base">Delivery</Text>
        <Text className="text-gray-500 text-base">$10.00</Text>
      </View>
      <View className="flex-row justify-between mt-2">
        <Text className="font-medium text-base">Total</Text>
        <Text className="font-medium text-base">$420.00</Text>
      </View>
    </>
  );
};

export default ShoppingCartTotals;
