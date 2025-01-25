import "../styles/global.css";

import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  ActivityIndicator,
} from "react-native";

import { useFonts } from "expo-font";

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Status } from "../components/Status";
import { NoTasks } from "../components/NoTasks";
import { Checkbox } from "../components/Checkbox";

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
          <View className="flex-row gap-[2vw]">
            <Input />
            <Button />
          </View>
          <Status value={1} />
          <NoTasks />

          <Checkbox />
        </View>
      </SafeAreaView>
    </>
  );
}
