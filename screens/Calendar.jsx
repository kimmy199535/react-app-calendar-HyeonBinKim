import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Calendar() {
  return (
    <View style={styles.container}>
      <Text>This is Calendar</Text>
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
