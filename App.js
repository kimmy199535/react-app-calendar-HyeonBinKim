// 외부 모듈
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// 내부 모듈
import BottomNavigation from "./navigation/bottomNavigation";

function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BottomNavigation />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
