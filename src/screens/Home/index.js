import React,{useState,useEffect} from "react";
import { View, Text, Button } from "react-native";

function HomeScreen({ navigation }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
      ),
    });
  }, [navigation]);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Text></Text>
      <Text>{count}</Text>
      <Text></Text>
      <Button
        title="Users"
        onPress={() => navigation.navigate("Users")}
      ></Button>
    </View>
  );
}

export default HomeScreen;
