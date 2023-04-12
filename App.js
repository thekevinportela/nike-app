import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ProductsScreen from "./src/screens/ProductsScreen";
import ProductDetailsScreen from "./src/screens/ProductDetailsScreen";
import ShoppingCart from "./src/screens/ShoppingCart";

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        {/* <ProductsScreen /> */}
        {/* <ProductDetailsScreen /> */}
        <ShoppingCart />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </>
  );
}
