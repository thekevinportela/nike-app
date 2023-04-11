import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ProductsScreen from "./src/screens/ProductsScreen";
import ProductDetailsScreen from "./src/screens/ProductDetailsScreen";

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        {/* <ProductsScreen /> */}
        <ProductDetailsScreen />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </>
  );
}
