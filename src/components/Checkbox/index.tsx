import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

export function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View className="flex-1 justify-center items-center">
      <TouchableOpacity
        className={`size-[8vw] border-2  justify-center items-center rounded-full mt-[4vh] ${
          isChecked
            ? "border-secondary-600 bg-secondary-600 focus:border-secondary-300"
            : "border-primary-300 focus:border-primary-600"
        }`}
        onPress={toggleCheckbox}
      >
        {isChecked && (
          <Text className="text-white font-bold">
            <MaterialIcons name="check" size={20} />
          </Text>
        )}
      </TouchableOpacity>
      <Text>{isChecked ? "Marcado" : "Desmarcado"}</Text>
    </View>
  );
}
