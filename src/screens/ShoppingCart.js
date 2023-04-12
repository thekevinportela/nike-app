import { View, Text, FlatList, Pressable } from "react-native";
import cart from "../data/cart";
import CartListItem from "../components/CartListItem";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ShoppingCartTotals from "../components/ShoppingCartTotals";
import BigButton from "../components/BigButton";

const ShoppingCart = () => {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 ">
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
      />
      <View
        className={`absolute bottom-[${
          insets.bottom - 1
        }] self-center w-full px-5 bg-white`}
      >
        <ShoppingCartTotals />
        <BigButton title="Checkout" />
      </View>
    </View>
  );
};

export default ShoppingCart;
