import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

interface HeaderProps {
  name: string;
}

const Header = ({ name }: HeaderProps) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{name}</Text>
      <TouchableOpacity style={styles.alertButton}>
        <Text style={styles.alertText}>Alert me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  backButton: {
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  alertButton: {
    padding: 8,
  },
  alertText: {
    color: "#007AFF",
  },
});

export default Header;
