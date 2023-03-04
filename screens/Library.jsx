// 외부 모듈
import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Library() {
  return (
    <View style={styles.container}>
      <Text>This is Library</Text>
    </View>
  );
}

export default Library;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
