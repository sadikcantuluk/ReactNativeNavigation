import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home";
import UsersScreen from "../screens/Users";
import UserDetail from "../screens/UserDetail/UserDetail";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const UsersStack = createNativeStackNavigator();

function UsersStackScreen() {
  return (
    <UsersStack.Navigator>
      <UsersStack.Screen name="Users" component={UsersScreen} />
      <UsersStack.Screen name="UserDetail" component={UserDetail} />
    </UsersStack.Navigator>
  );
}

export { HomeStackScreen, UsersStackScreen };

const styles = StyleSheet.create({});
