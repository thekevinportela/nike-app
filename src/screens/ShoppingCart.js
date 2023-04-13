import { View, Text, FlatList, Pressable } from "react-native";
import CartListItem from "../components/CartListItem";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ShoppingCartTotals from "../components/ShoppingCartTotals";
import BigButton from "../components/BigButton";
import { useSelector } from "react-redux";
import { cartSlice } from "../store/cartSlice";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <View className="flex-1 ">
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
      />
      <View className={`absolute bottom-9 self-center w-full px-5 bg-white`}>
        <ShoppingCartTotals />
        <BigButton title="Checkout" />
      </View>
    </View>
  );
};

export default ShoppingCart;
