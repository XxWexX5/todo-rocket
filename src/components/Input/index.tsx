import { TextInput } from "react-native";

export function Input() {
  return (
    <TextInput
      placeholder="Adicione uma nova tarefa"
      className="flex-1 bg-neutral-500 h-[6.5vh] rounded-[2.5vw] px-[5vw] border-2 border-neutral-700 text-[4.5vw] text-neutral-300 focus:border-secondary-600"
    />
  );
}
