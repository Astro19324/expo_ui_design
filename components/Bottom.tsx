import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface BottomProps {
  home: string;
  message: string;
  account: string;
}

const Bottom = ({ home, message, account }: BottomProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push("/")}>
        <Feather name="home" size={36} color={home} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="chatbubble-outline" size={36} color={message} />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="account-circle-outline"
          size={36}
          color={account}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  text: {
    color: "#666",
  },
});

export default Bottom;
