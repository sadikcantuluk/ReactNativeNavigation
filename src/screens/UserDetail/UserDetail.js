import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const UserDetail = ({ route, navigation }) => {
  const data = route.params;

  return (
    <View>
      <Text style={styles.text}>Id : {data.id}</Text>
      <Text style={styles.text}>Ad : {data.name}</Text>
      <Text style={styles.text}>Şehir : {data.city}</Text>
      <Button
        title="Güncelle"
        onPress={() => navigation.setOptions({ title: "Update !" })}
      ></Button>
    </View>
  );
};

export default UserDetail;

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  },
});
