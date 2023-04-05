import { View, FlatList } from "react-native";
import products from "../data/products";
import ShoeCard from "../components/ShoeCard";

const ProductsScreen = () => {
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
