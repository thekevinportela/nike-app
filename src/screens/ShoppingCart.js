import { View, Text, FlatList, Pressable } from "react-native";
import cart from "../data/cart";
import CartListItem from "../components/CartListItem";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ShoppingCartTotals from "../components/ShoppingCartTotals";

const ShoppingCart = () => {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 ">
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
      />
      <View
        className={`absolute bottom-[${insets.bottom}] self-center w-full px-5 bg-white`}
      >
        <ShoppingCartTotals />
        <Pressable
          className={`bg-black p-5 self-center rounded-full w-full mt-5`}
        >
          <Text className="text-white text-center text-base font-medium">
            Checkout
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ShoppingCart;
