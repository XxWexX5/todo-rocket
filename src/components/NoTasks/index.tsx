import { Text, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "../../utils/colors";

export function NoTasks() {
  return (
    <View className="justify-center items-center gap-y-[1.5vh]">
      <View>
        <Text>
          <MaterialIcons
            name="description"
            size={55}
            color={colors.neutral[400]}
          />
        </Text>
      </View>

      <View className="gap-y-[.5vh]">
        <Text className="text-neutral-300 font-bold text-center text-[4vw]">
          Você ainda não tem tarefas cadastradas
        </Text>

        <Text className="text-neutral-300 text-center text-[3.8vw]">
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}
