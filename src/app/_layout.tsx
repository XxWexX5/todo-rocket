import "../styles/global.css";

import {
  SafeAreaView,
  StatusBar,
  View,
  ActivityIndicator,
  Image,
} from "react-native";

import { useFonts } from "expo-font";

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useState } from "react";
import { Container } from "../components/Container";

import Logo from "../assets/images/logo.svg";

export default function RootLayout() {
  const [isChecked, setIsChecked] = useState(false);

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
                  <Input />
                  <Button />
                </View>
              </Container>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
