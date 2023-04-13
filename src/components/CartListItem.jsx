import { View, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { cartSlice } from "../store/cartSlice";

const CartListItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const itemPrice = (cartItem.product.price * cartItem.quantity).toFixed(2);

  const increaseQuantity = () => {
    dispatch(
      cartSlice.actions.changeQuantity({
        productId: cartItem.product.id,
        amount: 1,
      })
    );
  };
  const decreaseQuantity = () => {
    dispatch(
      cartSlice.actions.changeQuantity({
        productId: cartItem.product.id,
        amount: -1,
      })
    );
  };

  return (
    <View className="p-3 px-5 flex-row">
      <Image
        source={{ uri: cartItem.product.image }}
        className="w-[40%] aspect-square"
      />
      <View className="flex-1 ml-3 py-5 justify-between">
        <View>
          <Text className="font-medium text-lg">{cartItem.product.name}</Text>
          <Text className="text-base text-gray-500">Size {cartItem.size}</Text>
        </View>

        <View className="flex-row items-center">
          <Feather
            onPress={decreaseQuantity}
            name="minus-circle"
            size={24}
            color="gray"
          />
          <Text className="mx-3 font-bold text-gray-500">
            {cartItem.quantity}
          </Text>
          <Feather
            onPress={increaseQuantity}
            name="plus-circle"
            size={24}
            color="gray"
          />
          <Text className="text-base ml-auto font-medium">${itemPrice}</Text>
        </View>
      </View>
    </View>
  );
};

export default CartListItem;
