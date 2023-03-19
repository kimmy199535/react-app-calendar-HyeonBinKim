// 외부 모듈
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

// 내부 모듈
import Header from "./Header";
import Body from "./Body";

function CalendarPage() {
  const DATE = new Date();
  // Date 생성자로 오늘 날짜 확인
  const YEAR = DATE.getFullYear();
  // DATE를 기준으로 현재 년도 추출
  const MONTH = DATE.getMonth() + 1;
  // DATE를 기준으로 현재 월 추출 (0월부터 시작하기 때문에 +1을 한다.)

  const [month, setMonth] = useState(MONTH);
  // 달력에서 월을 바꾸기 위해 상태값 설정. 초기값은 현재의 월(MONTH)
  const [year, setYear] = useState(YEAR);
  // 달력에서 연도를 바꾸기 위해 상태값 설정. 초기값은 현재의 년(YEAR)

  const onPressNextMonth = () => {
    // 다음 달로 이동하는 함수. 월 값에 +1을 해야한다.
    if (month === 12) {
      // 만약 현재 month의 값이 12인 경우에 다음 달로 이동한다면,
      setYear((prevYear) => prevYear + 1);
      // 이듬해가 되기 때문에 연도도 +1이 되어야 한다. batch update를 피하기 위해서 동기적으로 처리
      setMonth(1);
    } else {
      setMonth((prevMonth) => prevMonth + 1);
    }
  };

  const onPressPrevMonth = () => {
    // 이전 달로 이동하는 함수. 월 값에 -1을 해야한다.
    if (month === 1) {
      // 만약의 현재 month 값이 1인 경우, 이전 달로 이동한다면,
      setYear((prevYear) => prevYear - 1);
      // 지난해가 되기 때문에 연도도 -1이 되어야 한다.
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
        <Body
          month={month}
          year={year}
          onPressNextMonth={onPressNextMonth}
          onPressPrevMonth={onPressPrevMonth}
        />
      </View>
    </View>
  );
}

export default CalendarPage;

const style = StyleSheet.create({});
