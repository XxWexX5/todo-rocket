import { Text, TouchableOpacity, View } from "react-native";
import { Checkbox } from "../Checkbox";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "../../utils/colors";

interface TaskProps {
  id: string;
  isChecked: boolean;
  content: string;
  handleDeleteTask: () => void;
  handleCheckTask: (id: string) => void;
}

export function Task({
  id,
  isChecked,
  content,
  handleDeleteTask,
  handleCheckTask,
}: TaskProps) {
  return (
    <View className="flex-row items-center justify-center gap-[4vw] bg-neutral-500 p-[4vw] rounded-[3vw] border-2 border-neutral-400">
      <Checkbox
        id={id}
        isChecked={isChecked}
        handleCheckTask={handleCheckTask}
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
