import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "react-native";
import DataText from "./DataText";
import Loading from "../../components/Loading";
import axios from "axios";
import Error from "../../components/Error";

const data = [
  {
    id: 1,
    name: "Sadık",
    city: "Tokat",
  },
  {
    id: 2,
    name: "Miray",
    city: "Sivas",
  },
  {
    id: 3,
    name: "Elif",
    city: "İzmir",
  },
  {
    id: 4,
    name: "Yusuf",
    city: "Erzurum",
  },
];

const UsersScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
   return <Loading text={"Yükleniyor..."} />;
  }

  if (error) {
   return <Error message={error} />;
  }

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <DataText item={item} />}
    ></FlatList>
  );
};

export default UsersScreen;
