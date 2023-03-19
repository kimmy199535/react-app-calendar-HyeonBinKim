// 외부 모듈
import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";

// 내부 모듈

function Body(props) {
  const { year, month, onPressNextMonth, onPressPrevMonth } = props;
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [totalDate, setTotalDate] = useState([]);
  // 전체 일을 넣을 수 있는 빈 배열 생성

  const [selected, setSelected] = useState({
    year: 0,
    month: 0,
    date: 0,
  });
  // 선택된 특정 날짜 값 (초기값은 전부 0으로 설정)

  // 이번달과 다음달의 1일
  const thisMonthFirstDate = totalDate.indexOf(1);
  // 현재 달 1일의 인덱스를 찾는다.
  const nextMonthFirstDate = totalDate.indexOf(1, 7);
  // 다음 달 1일과 겹칠 수 있기 때문에 다음 달은 7번 인덱스 이후에 있는 1을 찾도록 한다.

  function changeDate() {
    // 저번달과 이번달의 마지막 날
    // Date 생성자의 parameter에서 date 부분에 0을 넣을 경우 지난 달의 마지막 날짜를 확인할 수 있다.
    let prevMonthLastDate = new Date(year, month - 1, 0).getDate();
    // 이전 달의 값을 넣고 Date 추출. 지난 달의 마지막 날짜 확인
    let prevMonthLastDay = new Date(year, month - 1, 0).getDay();
    // 이전 달의 값을 넣고 Day 추출. 지난 달의 마지막 날의 요일 인덱스 확인.

    const thisMonthLastDay = new Date(year, month, 0).getDay();
    const thisMonthLastDate = new Date(year, month, 0).getDate();
    // 현재 날짜의 값을 넣어 동일하게 현재 달의 마지막 날짜와 요일 인덱스를 확인한다.

    // prevDates 계산
    let prevDates = [];
    // 지난 달의 날짜들

    if (prevMonthLastDay !== 6) {
      // 만약 지난 달의 마지막 요일이 6(토요일)이 아니라면
      for (let i = 0; i < prevMonthLastDay + 1; i++) {
        // 일요일이 0이기 때문에 0부터 시작해서 지난 달의 마지막 요일까지 인덱스를 반복시킨다.
        // 이렇게 구해진 i는 지난 달의 마지막 주가 된다. (마지막 일요일부터 진짜 마지막 날까지)
        // console.log("dd", i);
        // console.log("ss", prevMonthLastDate - i);
        prevDates.unshift(prevMonthLastDate - i);
        // 지난 달의 마지막 날짜에서 i씩 빼고 배열에 앞쪽에 추가하면서 지날 달의 마지막 주 날짜들을 추가한다.
      }
    }

    // nextDates 계산
    let nextDates = [];
    // 다음 달의 날짜들

    for (let i = 1; i < 7 - thisMonthLastDay; i++) {
      // 다음 달은 1일 부터 시작하기 때문에 1부터 시작한다.
      // 7에서 현재 달의 마지막 요일의 인덱스를 뺀 값보다 i가 작다면 반복문이 계속된다.
      // console.log("vv", i);
      nextDates.push(i);
      // 다음 날의 첫번째 주에 해당하는 날짜를 하나씩 추가한다.
    }

    // presentDates 계산
    let presentDates = [];
    // 현재 날짜를 넣을 수 있는 빈 배열 생성
    presentDates = [...Array(thisMonthLastDate + 1).keys()].slice(1);
    // 빈 배열 안에 Array 생성자를 사용하면 길이가 n인 배열이 생긴다.
    // 배열은 0부터 시작하기 때문에 현재 달의 마지막 날 +1을 해서 마지막 요소가 현재 달의 날짜와 같은 배열 생성한다.
    // keys() 사용해서 배열 요소의 인덱스를 값으로 지정한다. (undefined > index)
    // 만들어진 배열에서 slice()를 이용해 0을 제거한다. (1~현재 달의 마지막 날짜)

    return prevDates.concat(presentDates, nextDates);
    // 달력엔 이전 달, 현재 달, 다음 달 순서로 표시되어야 하기 때문에 prevDates를 기준으로 순서대로 presentDates와 nextDates를 합친다.
  }

  const handleSelectDate = ({ year, month, date }, i) => {
    // 특정 날짜 선택 시 실행되는 함수.
    if (i >= nextMonthFirstDate && nextMonthFirstDate !== -1) {
      // 만약 특정 날짜가 다음 달의 1일보다 크거나 같고, 다음 달 1일의 값이 -1가 아닐 경우
      return null;
      // 선택해도 아무 일이 없다
    }
    if (i < thisMonthFirstDate) {
      // 만약 특정 날짜가 이번 달의 1일보다 작다면
      return null;
      // 선택해도 아무 일이 없다
    }
    setSelected({ year, month, date });
    // 선택한 특정 날짜의 year, month, date가 selected의 값이 되도록 setSelected 활용
  };

  const swipeLeft = () => {
    onPressNextMonth(month);
  };

  const swipeRight = () => {
    onPressPrevMonth(month);
  };

  useEffect(() => {
    // 화면이 처음에 렌더링 될때,
    setTotalDate(changeDate());
    // 화면에 표시되는 전체 날짜는 changeDate 함수의 리턴값이 된다.
    // 리턴값은 이전 달의 마지막 주, 현재 달, 다음 달의 첫번째 주의 날짜값이 들어있는 배열이다.
  }, []);

  useEffect(() => {
    // month 값이 바뀌면
    setTotalDate(changeDate(month));
    // 해당 month값을 changeDate의 인자로 넘긴다.
    // 리턴 값은 month를 기준으로 이전 달, 해당 달, 다음 달의 날짜값이 들어있는 배열이다.
  }, [month]);

  return (
    <GestureRecognizer
      onSwipeLeft={swipeLeft}
      onSwipeRight={swipeRight}
      config={{ velocityThreshold: 0.1 }}
    >
      <View style={style.dayContainer}>
        {daysOfWeek.map((day, i) => (
          // 요일이 담긴 배열 daysOfWeek의 요소를 map을 돌려 하나씩 출력한다.
          <View key={i}>
            <Text style={colorOfDay(day).daysOfWeek}>{day}</Text>
          </View>
        ))}
      </View>
      <View style={style.dateContainer}>
        {totalDate.map((date, i) => (
          // 전체 날짜가 들어있는 배열 totalDate를 map을 돌려 하나씩 출력한다.
          <View style={style.allDate} key={i}>
            <Pressable
              onPress={() => handleSelectDate({ year, month, date }, i)}
              // 특정 날짜 선택 시 handleSelectDate 함수가 실행되고, 인자로 해당 날짜의 year, month, date, 그리고 해당 날짜 자체를 보낸다.
              style={
                (i >= nextMonthFirstDate && nextMonthFirstDate !== -1) ||
                i < thisMonthFirstDate
                  ? // 만약 선택한 날짜가 이전 달이나 다음 달에 속해있다면
                    null // 아무 반응이 없다
                  : selected.date === date &&
                    selected.month === month &&
                    selected.year === year
                  ? // 선택한 날짜의 year, month, date가 현재 달의 month, year, date와 같다면
                    style.selectedDate // 특정 스타일을 적용한다.
                  : null // 같지 않다면 아무 반응이 없다
              }
            >
              <Text
                style={
                  (i >= nextMonthFirstDate && nextMonthFirstDate !== -1) ||
                  i < thisMonthFirstDate
                    ? // 만약 특정 날짜 i가 이전 달이나 다음 달에 속해있다면
                      style.otherDate // otherDate 스타일을 적용하고,
                    : style.currDate // 아니라면 currDate 스타일을 적용한다.
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
