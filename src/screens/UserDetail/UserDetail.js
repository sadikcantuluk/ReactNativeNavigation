import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import axios from "axios";

const UserDetail = ({ route, navigation }) => {
  const data = route.params;

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(data.id);

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => setUser(res.data))
      .finally(() => setLoading(false));
  }, [userId]);

  useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => setUserId((c) => (c === 10 ? 10 : c + 1))}
          title="Next"
        />
      ),
    });
  }, [navigation]);

  return loading ? (
    <Loading text={"Kullanıcı Yükleniyor..."} />
  ) : (
    <View>
      <Text style={styles.text}>Id : {user.id}</Text>
      <Text style={styles.text}>Ad : {user.name}</Text>
      <Text style={styles.text}>Soyad : {user.username}</Text>
      <Text style={styles.text}>Mail : {user.email}</Text>
      <Text style={styles.text}>City : {user.address.city}</Text>
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
    fontSize: 20,
  },
});
