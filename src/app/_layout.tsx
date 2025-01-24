import "../styles/global.css";

import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  ActivityIndicator,
} from "react-native";

import { useFonts } from "expo-font";

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
          <Text className="text-blue-500 font-inter">Hello World!</Text>
        </View>
      </SafeAreaView>
    </>
  );
}
