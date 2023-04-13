import { View, FlatList } from "react-native";
import ShoeCard from "../components/ShoeCard";
import { useSelector } from "react-redux";

const ProductsScreen = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ShoeCard item={item} />}
        numColumns={2}
      />
    </View>
  );
};

export default ProductsScreen;
