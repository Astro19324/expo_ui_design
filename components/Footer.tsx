import React from "react";
import { View, StyleSheet } from "react-native";

import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Feather name="home" size={36} color="red" />
      <Ionicons name="chatbubble-outline" size={36} color="black" />
      <MaterialCommunityIcons
        name="account-circle-outline"
        size={36}
        color="black"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "fixed",
    backgroundColor: "white",
  },
  text: {
    color: "#666",
  },
});

export default Footer;
