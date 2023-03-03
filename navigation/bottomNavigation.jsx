// 외부 모듈
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// 내부 모듈
import Home from "../screens/home";

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Calendaer" component={Calendar} />
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="MyPage" component={MyPage} />
    </Tab.Navigator>
  );
}

export default BottomNavigation;
