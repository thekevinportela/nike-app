import { View, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

const CartListItem = ({ cartItem }) => {
  const increaseQuantity = () => {};
  const decreaseQuantity = () => {};

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
            onPress={increaseQuantity}
            name="minus-circle"
            size={24}
            color="gray"
          />
          <Text className="mx-3 font-bold text-gray-500">
            {cartItem.quantity}
          </Text>
          <Feather
            onPress={decreaseQuantity}
            name="plus-circle"
            size={24}
            color="gray"
          />
          <Text className="text-base ml-auto font-medium">$320.00</Text>
        </View>
      </View>
    </View>
  );
};

export default CartListItem;
