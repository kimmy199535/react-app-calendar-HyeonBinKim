// 외부 모듈
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

// 내부 모듈

function Body() {
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"]; //일주일
  return (
    <View>
      <View style={style.dayContainer}>
        {daysOfWeek.map((day, i) => (
          <View key={i}>
            <Text style={colorOfDay(day).daysOfWeek}>{day}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default Body;

const style = StyleSheet.create({
  dayContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 40,
  },
});

const colorOfDay = (day) =>
  StyleSheet.create({
    daysOfWeek: {
      color: day === "SUN" ? "red" : day === "SAT" ? "blue" : "grey",
      fontSize: 16,
    },
  });
