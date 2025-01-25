import { View, Text } from "react-native";

interface StatusProps {
  value: number;
}

export function Status({ value = 0 }: StatusProps) {
  return (
    <View className="bg-neutral-400 w-[10vw] h-[3.5vh] rounded-full justify-center items-center">
      <Text className="text-white text-[4vw] font-bold">
        {value > 9 ? "+9" : value}
      </Text>
    </View>
  );
}
