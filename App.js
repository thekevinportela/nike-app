import { StatusBar } from "expo-status-bar";

import ProductsScreen from "./src/screens/ProductsScreen";

export default function App() {
  return (
    <>
      <ProductsScreen />
      <StatusBar style="auto" />
    </>
  );
}
