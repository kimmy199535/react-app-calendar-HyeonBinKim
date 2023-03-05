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

  const [month, setMonth] = useState(MONTH);
  const [year, setYear] = useState(YEAR);

  const onPressNextMonth = () => {
    if (month === 12) {
      setYear((prevYear) => prevYear + 1);
      setMonth(1);
    } else {
      setMonth((prevMonth) => prevMonth + 1);
    }
  };

  const onPressPrevMonth = () => {
    if (month === 1) {
      setYear((prevYear) => prevYear - 1);
      setMonth(12);
    } else {
      setMonth((prevMonth) => prevMonth - 1);
    }
  };

  return (
    <View>
      <View>
        <Header
          month={month}
          year={year}
          onPressNextMonth={onPressNextMonth}
          onPressPrevMonth={onPressPrevMonth}
        />
      </View>
      <View>
        <Body month={month} year={year} />
      </View>
    </View>
  );
}

export default CalendarPage;

const style = StyleSheet.create({});
