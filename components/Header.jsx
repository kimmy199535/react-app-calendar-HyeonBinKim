// 외부 모듈
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

// 내부 모듈

function Header(props) {
  const months = [
    "",
    "January",
    "Febrary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <View style={style.headerContainer}>
      <Pressable onPress={props.onPressPrevMonth}>
        <AntDesign name="left" size={24} color="skyblue" />
      </Pressable>
      <Text style={style.text}>{months[props.month]}</Text>
      <Text style={style.text}>{props.year}</Text>
      <Pressable onPress={props.onPressNextMonth}>
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
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 20,
  },
});
