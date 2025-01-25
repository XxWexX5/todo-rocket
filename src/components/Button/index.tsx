import { Text, TouchableOpacity } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

export function Button() {
  return (
    <TouchableOpacity className="flex-1 max-w-[15vw] bg-primary-600 justify-center items-center rounded-[2.5vw] active:bg-primary-300">
      <Text>
        <MaterialIcons name="add" size={30} color="#FFF" />
      </Text>
    </TouchableOpacity>
  );
}
