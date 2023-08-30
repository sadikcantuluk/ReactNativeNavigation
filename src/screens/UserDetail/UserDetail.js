import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import axios from "axios";
import Error from "../../components/Error";

const UserDetail = ({ route, navigation }) => {
  const data = route.params;

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(data.id);
  const [error, setError] = useState(null);

  useEffect(() => {
    // axios(`https://jsonplaceholder.typicode.com/users/${userId}`)
    //   .then((res) => setUser(res.data))
    //   .catch((err) => setError(err.message))
    //   .finally(() => setLoading(false));

    getDataDetail();
  }, [userId]);

  const getDataDetail = async () => {
    try {
      const res = await axios(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      setUser(res.data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

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

  if (loading) {
    return <Loading text={"Kullanıcı Yükleniyor..."} />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
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
