import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native";
import DataText from "./DataText";


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
  return (
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DataText item={item} />}
      ></FlatList>
  );
};

export default UsersScreen;
