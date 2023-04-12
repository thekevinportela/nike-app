import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ProductsScreen from "./src/screens/ProductsScreen";
import ProductDetailsScreen from "./src/screens/ProductDetailsScreen";
import ShoppingCart from "./src/screens/ShoppingCart";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </>
  );
}
