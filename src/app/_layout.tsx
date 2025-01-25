import "../styles/global.css";

import {
  SafeAreaView,
  StatusBar,
  View,
  ActivityIndicator,
  Text,
  TextInput,
  ScrollView,
} from "react-native";

import { useFonts } from "expo-font";

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useState } from "react";
import { Container } from "../components/Container";

import Logo from "../assets/images/logo.svg";
import { Status } from "../components/Status";
import { NoTasks } from "../components/NoTasks";
import { Task } from "../components/Task";

type Task = {
  id: string;
  isChecked: boolean;
  content: string;
};

export default function RootLayout() {
  const [inputTask, setInputTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const [fontsLoaded] = useFonts({
    Inter: require("../assets/fonts/Inter/inter.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  function handleAddTask() {
    const id = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    setTasks((prev) => [
      ...prev,
      { id: id, content: inputTask, isChecked: false },
    ]);

    return setInputTask("");
  }

  function handleCheckTask(id: string) {
    const data = tasks.map((task) => {
      return {
        id: task.id,
        content: task.content,
        isChecked: task.id === id ? !task.isChecked : task.isChecked,
      };
    });

    setTasks(data);
  }

  function handleDeleteTask(id: string) {
    const data = tasks.filter((task) => task.id !== id);

    setTasks(data);
  }

  const countTasksChecked = tasks.filter((task) => task.isChecked).length;

  return (
    <View className="bg-neutral-700">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <SafeAreaView className="mt-[7vh]">
        <View>
          <View className="justify-center items-center mt-[2vh] mb-[6.5vh]">
            <Logo width={150} height={80} />
          </View>

          <View className="bg-neutral-600 min-h-[100vh]">
            <View className="-mt-[3.3vh]">
              <Container>
                <View className="flex-row gap-[2vw]">
                  <Input value={inputTask} handleInput={setInputTask} />
                  <Button onPress={handleAddTask} />
                </View>

                <View className="flex-row justify-between mt-[4.35vh]">
                  <View className="flex-row items-center gap-[3vw]">
                    <Text className="text-primary-300 font-bold text-[4.35vw]">
                      Criadas
                    </Text>

                    <Status value={tasks.length} />
                  </View>

                  <View className="flex-row items-center gap-[3vw]">
                    <Text className="text-secondary-300 font-bold text-[4.35vw]">
                      Concluídas
                    </Text>

                    <Status value={countTasksChecked} />
                  </View>
                </View>

                <View className="bg-neutral-400 w-full h-[.15vh] my-[4vh]"></View>

                {tasks.length > 0 ? (
                  <ScrollView
                    showsVerticalScrollIndicator={false}
                    className="h-[50vh]"
                  >
                    <View className="gap-y-[2vh]">
                      {tasks.map((task) => {
                        if (!task.isChecked) {
                          return (
                            <Task
                              key={task.id}
                              id={task.id}
                              isChecked={task.isChecked}
                              content={task.content}
                              handleDeleteTask={handleDeleteTask}
                              handleCheckTask={handleCheckTask}
                            />
                          );
                        }
                      })}

                      {tasks.map((task) => {
                        if (task.isChecked) {
                          return (
                            <Task
                              key={task.id}
                              id={task.id}
                              isChecked={task.isChecked}
                              content={task.content}
                              handleDeleteTask={handleDeleteTask}
                              handleCheckTask={handleCheckTask}
                            />
                          );
                        }
                      })}
                    </View>
                  </ScrollView>
                ) : (
                  <NoTasks />
                )}
              </Container>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
