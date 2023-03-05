// 외부 모듈
import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

// 내부 모듈

function Body(props) {
  const { year, month, date, today } = props;
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [totalDate, setTotalDate] = useState([]);

  const [selected, setSelected] = useState({
    state: "",
    year: 0,
    month: 0,
    date: 0,
  });

  // 이번달과 다음달의 1일
  const thisMonthFirstDate = totalDate.indexOf(1);
  const nextMonthFirstDate = totalDate.indexOf(1, 7);

  function changeDate() {
    // 저번달과 이번달의 마지막 날
    let prevMonthLastDate = new Date(year, month - 1, 0).getDate();
    let prevMonthLastDay = new Date(year, month - 1, 0).getDay();

    const thisMonthLastDay = new Date(year, month, 0).getDay();
    const thisMonthLastDate = new Date(year, month, 0).getDate();

    // prevDates 계산
    let prevDates = [];

    if (prevMonthLastDay !== 6) {
      for (let i = 0; i < prevMonthLastDay + 1; i++) {
        prevDates.unshift(prevMonthLastDate - i);
      }
    }

    // nextDates 계산
    let nextDates = [];

    for (let i = 1; i < 7 - thisMonthLastDay; i++) {
      if (i === 0) {
        return nextDates;
      }
      nextDates.push(i);
    }

    // presentDates 계산
    let presentDates = [];
    presentDates = [...Array(thisMonthLastDate + 1).keys()].slice(1);

    return prevDates.concat(presentDates, nextDates);
  }

  const handleSelectDate = ({ year, month, date }) => {
    setSelected({ state: "", year, month, date });
  };

  useEffect(() => {
    setTotalDate(changeDate(7));
  }, []);

  useEffect(() => {
    setTotalDate(changeDate(month));
  }, [month]);

  return (
    <View>
      <View style={style.dayContainer}>
        {daysOfWeek.map((day, i) => (
          <View key={i}>
            <Text style={colorOfDay(day).daysOfWeek}>{day}</Text>
          </View>
        ))}
      </View>
      <View style={style.dateContainer}>
        {totalDate.map((date, i) => (
          <View style={style.eachDate} key={i}>
            <Pressable
              onPress={() => handleSelectDate({ year, month, date })}
              style={
                selected.date === date &&
                selected.month === month &&
                selected.year === year
                  ? style.selectedDate
                  : null
              }
            >
              <Text>{date}</Text>
            </Pressable>
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
  dateContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  eachDate: {
    width: "14.2%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedDate: {
    width: 30,
    height: 30,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
});

const colorOfDay = (day) =>
  StyleSheet.create({
    daysOfWeek: {
      color: day === "SUN" ? "red" : day === "SAT" ? "blue" : "grey",
      fontSize: 16,
    },
  });
