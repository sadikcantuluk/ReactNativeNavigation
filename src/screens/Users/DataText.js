import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const DataText = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("UserDetail",item)}>
        <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DataText;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "gray",
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 25,
  },
});
