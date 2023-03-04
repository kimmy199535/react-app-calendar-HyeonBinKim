// 외부 모듈
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

// 내부 모듈

function Header() {
  return (
    <View style={style.headerContainer}>
      <Pressable>
        <AntDesign name="left" size={24} color="skyblue" />
      </Pressable>
      <Text style={style.month}>Month</Text>
      <Text style={style.year}>Year</Text>
      <Pressable>
        <AntDesign name="right" size={24} color="skyblue" />
      </Pressable>
    </View>
  );
}

export default Header;

const style = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  month: {
    fontSize: 20,
  },
  year: {
    fontSize: 20,
  },
});
