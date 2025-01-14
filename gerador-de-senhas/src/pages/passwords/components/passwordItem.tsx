import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

type passwordItemProps = {
    data: []
    removePassword: () => void
}

export function PasswordItem({ data, removePassword }:passwordItemProps) {
  return (
    <Pressable onLongPress={removePassword} style={styles.container}>
      <Text style={styles.text}>{data}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0e0e0e",
    padding: 14,
    width: "100%",
    marginBottom: 14,
    borderRadius:8,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  text:{
    color:"#fff"
  }
});
