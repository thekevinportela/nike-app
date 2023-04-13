import { View, Text, Pressable } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const BigButton = ({ title, absolute, onPress }) => {
  const insets = useSafeAreaInsets();

  return (
    <Pressable
      onPress={onPress}
      className={`bg-black p-5 self-center rounded-full w-[90vw] mt-5 z-10 ${
        absolute ? `absolute bottom-9` : ""
      }`}
    >
      <Text className="text-white text-center text-base font-medium">
        {title}
      </Text>
    </Pressable>
  );
};

export default BigButton;
