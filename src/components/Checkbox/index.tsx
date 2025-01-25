import { useState } from "react";
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

interface CheckboxProps {
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
  content: string;
}

export function Checkbox({ isChecked, setIsChecked, content }: CheckboxProps) {
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View className="flex-1">
      <TouchableWithoutFeedback onPress={toggleCheckbox}>
        <View className="flex-row items-center gap-[3vw]">
          <View
            className={`size-[8vw] border-2 justify-center items-center rounded-full ${
              isChecked
                ? "border-secondary-600 bg-secondary-600"
                : "border-primary-300"
            }`}
          >
            {isChecked && (
              <Text className="text-white font-bold">
                <MaterialIcons name="check" size={20} />
              </Text>
            )}
          </View>

          <Text className="flex-1 text-[4vw] text-white">{content}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
