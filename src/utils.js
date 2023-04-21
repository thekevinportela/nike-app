import {
  SharedTransition,
  withSpring,
  withTiming,
} from "react-native-reanimated";
export const transition = SharedTransition.custom((values) => {
  "worklet";
  return {
    height: withTiming(values.targetHeight),
    width: withTiming(values.targetWidth),
  };
});
