import { Text, TouchableOpacity, View } from "react-native";
import { Checkbox } from "../Checkbox";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "../../utils/colors";

interface TaskProps {
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
  content: string;
  handleDeleteTask: () => void;
}

export function Task({
  isChecked,
  setIsChecked,
  content,
  handleDeleteTask,
}: TaskProps) {
  return (
    <View className="flex-row items-center justify-center gap-[4vw] bg-neutral-500 p-[4vw] rounded-[3vw] border-2 border-neutral-400">
      <Checkbox
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        content={content}
      />

      <TouchableOpacity onPress={handleDeleteTask}>
        <Text>
          <MaterialIcons name="delete" size={30} color={colors.neutral[300]} />
        </Text>
      </TouchableOpacity>
    </View>
  );
}
