// 외부 모듈
import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";

// 내부 모듈

function Body(props) {
  const { year, month, onPressNextMonth, onPressPrevMonth } = props;
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
  // console.log(month, "thisMonthFirstDate", thisMonthFirstDate);
  // console.log(month, "nextMonthFirstDate", nextMonthFirstDate);

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

  // 여기가 수정할 부분
  const handleSelectDate = ({ year, month, date }, i) => {
    if (i >= nextMonthFirstDate && nextMonthFirstDate !== -1) {
      return null;
    }
    if (i < thisMonthFirstDate) {
      return null;
    }
    setSelected({ state: "", year, month, date });
  };

  const swipeLeft = () => {
    onPressNextMonth(month);
  };

  const swipeRight = () => {
    onPressPrevMonth(month);
  };

  useEffect(() => {
    setTotalDate(changeDate(7));
  }, []);

  useEffect(() => {
    setTotalDate(changeDate(month));
  }, [month]);

  return (
    <GestureRecognizer
      onSwipeLeft={swipeLeft}
      onSwipeRight={swipeRight}
      config={{ velocityThreshold: 0.1 }}
    >
      <View style={style.dayContainer}>
        {daysOfWeek.map((day, i) => (
          <View key={i}>
            <Text style={colorOfDay(day).daysOfWeek}>{day}</Text>
          </View>
        ))}
      </View>
      <View style={style.dateContainer}>
        {totalDate.map((date, i) => (
          <View style={style.allDate} key={i}>
            <Pressable
              onPress={() => handleSelectDate({ year, month, date }, i)}
              style={
                // 여기 조건 위로 보내기
                (i >= nextMonthFirstDate && nextMonthFirstDate !== -1) ||
                i < thisMonthFirstDate
                  ? null
                  : selected.date === date &&
                    selected.month === month &&
                    selected.year === year
                  ? style.selectedDate
                  : null
              }
            >
              <Text
                style={
                  (i >= nextMonthFirstDate && nextMonthFirstDate !== -1) ||
                  i < thisMonthFirstDate
                    ? style.otherDate
                    : style.currDate
                }
              >
                {date}
              </Text>
            </Pressable>
          </View>
        ))}
      </View>
    </GestureRecognizer>
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
  allDate: {
    width: "14.2%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  currDate: {},
  otherDate: {
    color: "lightgrey",
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
      color: day === "SUN" ? "red" : day === "SAT" ? "blue" : "black",
      fontSize: 16,
    },
  });
