import "../styles/global.css";

import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  ActivityIndicator,
} from "react-native";

import { useFonts } from "expo-font";

import { MaterialIcons } from "@expo/vector-icons";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export default function RootLayout() {
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

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <SafeAreaView className="mt-[7vh] mx-[5vw]">
        <View>
          <Text className="text-primary-300 font-inter">Hello World!</Text>
          <MaterialIcons name="add-circle" size={30} color="#FFF" />;
          <MaterialIcons name="description" size={30} color="#FFF" />;
          <MaterialIcons name="delete" size={30} color="#FFF" />;
          <View className="flex-row gap-[2vw]">
            <Input />
            <Button />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
