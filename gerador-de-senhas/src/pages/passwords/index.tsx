import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList, StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import useStorage from "../../hooks/useStorage";

import { PasswordItem } from "./components/passwordItem";

export default function Passwords() {
  const [listPassword, setListPassword] = useState([]);
  const focused = useIsFocused();
  const { getItem, removeItem } = useStorage();

  useEffect(() => {
    async function loadPasswords() {
      const passwords = await getItem("@pass");
      setListPassword(passwords);
    }
    loadPasswords();
  }, [focused]);

  async function handleDeletePassword(item: never) {
    const passwords = await removeItem("@pass", item);
    setListPassword(passwords);
  }

  return (
    <>
    <StatusBar backgroundColor="#392de9"/>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas senhas</Text>
      </View>

      <View style={styles.content}>
        <FlatList
          style={{ flex: 1, paddingTop: 14 }}
          data={listPassword}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <PasswordItem
              data={item}
              removePassword={() => handleDeletePassword(item)}
            />
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#392de9",
    paddingTop: 58,
    paddingBottom: 14,
    paddingLeft: 14,
    paddingRight: 14,
  },
  title: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
});
