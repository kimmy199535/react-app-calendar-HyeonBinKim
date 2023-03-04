// 외부 모듈
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

// 내부 모듈
import Header from "./Header";
import Body from "./Body";

function CalendarPage() {
  const DATE = new Date();
  const YEAR = DATE.getFullYear();
  const MONTH = DATE.getMonth() + 1;
  const DAY = DATE.getDate();
  const today = { year: YEAR, month: MONTH, date: DAY };

  const DaysOfWeek = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"]; //일주일

  const [month, setMonth] = useState(MONTH);
  const [year, setYear] = useState(YEAR);
  const [date, setDate] = useState(DAY);

  const onPressNextMonth = (month) => {
    if (month === 12) {
      setYear((prevYear) => prevYear + 1);
      setMonth(1);
    } else {
      setMonth((prevMonth) => prevMonth + 1);
    }
  };

  const onPressPrevMonth = (month) => {
    if (month === 1) {
      setYear((prevYear) => prevYear - 1);
      setMonth(12);
    } else {
      setMonth((prevMonth) => prevMonth - 1);
    }
  };

  const onPressSelectedDate = (year, month) => {
    setYear(year);
    setMonth(month);
  };

  return (
    <View style={style.calendarContainer}>
      <Header month={month} year={year} />
      <Body month={month} year={year} date={date} />
    </View>
  );
}

export default CalendarPage;

const style = StyleSheet.create({
  calendarContainer: {
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 16,
  },
});
