// 외부 모듈
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Feather } from "@expo/vector-icons";

// 내부 모듈
import Home from "../screens/Home";
import Calendar from "../screens/Calendar";
import Library from "../screens/Library";
import MyPage from "../screens/MyPage";

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color }) => {
            switch (route.name) {
              case "Home":
                return <Ionicons name="home-sharp" size={24} color={color} />;
              case "Calendar":
                return (
                  <Ionicons name="md-calendar-sharp" size={24} color={color} />
                );
              case "Library":
                return <Ionicons name="barbell" size={24} color={color} />;
              case "My Page":
                return <Feather name="user" size={24} color={color} />;
            }
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Calendar" component={Calendar} />
        <Tab.Screen name="Library" component={Library} />
        <Tab.Screen name="My Page" component={MyPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomNavigation;
