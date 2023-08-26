import * as React from "react";
import { View, Text,Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import HomeScreen from "./src/screens/Home";
import UsersScreen from "./src/screens/Users";
import UserDetail from "./src/screens/UserDetail/UserDetail";
import HeaderLogo from "./src/components/HeaderStyle";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: 32,
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Anasayfa",
            headerTitle: (props) => <HeaderLogo {...props} />,
            headerRight: () => (
              <Button title="Update count" />
            )
          }}
        />

        <Stack.Screen
          name="Users"
          component={UsersScreen}
          options={{
            title: "Kullanıcılar",
          }}
        />

        <Stack.Screen
          name="UserDetail"
          component={UserDetail}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
