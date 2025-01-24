import { TextInput } from "react-native";

export function Input() {
  return (
    <TextInput
      placeholder="Adicione uma nova tarefa"
      className="bg-neutral-500 h-[6.5vh] rounded-[1.5vw] px-[5vw] border border-neutral-700 text-[4.5vw] text-neutral-300"
    />
  );
}
