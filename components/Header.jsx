// 외부 모듈
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

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
  // 공백이 있는 이유는 인덱스는 0부터 시작하지만, 월을 표시하기 위해 +1이 되어있기 때문에
  return (
    <View style={style.headerContainer}>
      <Pressable onPress={props.onPressPrevMonth}>
        <AntDesign name="left" size={24} color="skyblue" />
      </Pressable>
      <View style={{ flexDirection: "row", gap: 15 }}>
        <Text style={style.text}>{months[props.month]}</Text>
        <Text style={style.text}>{props.year}</Text>
      </View>
      <Pressable onPress={props.onPressNextMonth}>
        <AntDesign name="right" size={24} color="skyblue" />
      </Pressable>
    </View>
  );
}

export default Header;

const style = StyleSheet.create({
  headerContainer: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 20,
  },
});
