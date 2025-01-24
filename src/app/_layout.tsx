import "../styles/global.css";

import { SafeAreaView, StatusBar, Text, View } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <SafeAreaView className="mt-[7vh] mx-[5vw]">
        <View>
          <Text className="text-blue-500">Hello World!</Text>
        </View>
      </SafeAreaView>
    </>
  );
}
