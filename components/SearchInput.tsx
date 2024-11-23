import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const SearchInput: React.FC = () => (
  <View style={styles.inputContainer}>
    <MaterialIcons name="search" size={25} />
    <TextInput style={styles.input} placeholder="Search" />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    paddingLeft: 8,
  },
  input: {
    flex: 1,
  },
});

export default SearchInput;
