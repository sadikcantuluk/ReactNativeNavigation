import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BootomTabNavigator from "./src/navigator/TabNavigator";

function App() {
  return (
    <NavigationContainer>
      <BootomTabNavigator/>
    </NavigationContainer>
  );
}

export default App;
