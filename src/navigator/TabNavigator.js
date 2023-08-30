import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackScreen, UsersStackScreen } from "./StackNavigator";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const BootomTabNavigator = () => {
  return (
    <Tab.Navigator
    initialRouteName="Users"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Users") {
            iconName = "people";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{ title: "Home" }}
      />
      <Tab.Screen
        name="Users"
        component={UsersStackScreen}
        options={{ title: "Users" }}
      />
    </Tab.Navigator>
  );
};

export default BootomTabNavigator;

const styles = StyleSheet.create({});
