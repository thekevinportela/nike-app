import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import {
  cartSlice,
  selectDeliveryPrice,
  selectSubtotal,
  selectTotal,
} from "../store/cartSlice";

const ShoppingCartTotals = () => {
  const subtotal = useSelector(selectSubtotal);
  const deliveryFee = useSelector(selectDeliveryPrice);
  const total = useSelector(selectTotal);

  return (
    <>
      <View className="border-gray-300 border-t pb-3" />
      <View className="flex-row justify-between">
        <Text className="text-gray-500 text-base">Subtotal</Text>
        <Text className="text-gray-500 text-base">${subtotal.toFixed(2)}</Text>
      </View>
      <View className="flex-row justify-between">
        <Text className="text-gray-500 text-base">Delivery</Text>
        <Text className="text-gray-500 text-base">
          ${deliveryFee.toFixed(2)}
        </Text>
      </View>
      <View className="flex-row justify-between mt-2">
        <Text className="font-medium text-base">Total</Text>
        <Text className="font-medium text-base">${total.toFixed(2)}</Text>
      </View>
    </>
  );
};

export default ShoppingCartTotals;
