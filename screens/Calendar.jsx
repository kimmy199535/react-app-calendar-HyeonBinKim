// 외부 모듈
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// 내부 모둘
import CalendarPage from "../components/CalendarPage";

function Calendar() {
  return (
    <View style={styles.container}>
      <CalendarPage />
    </View>
  );
}

export default Calendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
