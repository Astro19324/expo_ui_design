import React from "react";
import { View, StyleSheet, ScrollView, Text, Pressable } from "react-native";

import LocationInput from "@/components/LocationInput";
import SearchInput from "@/components/SearchInput";
import Layout from "@/components/Layout";
import UserCard from "@/components/UserCard";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function App() {
  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.topics}>Topics</Text>
          <Text style={styles.alertMe}>Alert Me</Text>
        </View>
        <View style={styles.inputBox}>
          <SearchInput />
          <LocationInput />
        </View>
        <ScrollView>
          <View style={styles.content}>
            <UserCard />
            <UserCard />
            <UserCard />
          </View>
        </ScrollView>
        <Pressable style={styles.iconPosition}>
          <AntDesign
            name="questioncircleo"
            size={40}
            color="black"
            style={styles.icon}
          />
        </Pressable>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    display: "flex",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  topics: {
    fontSize: 20,
    fontWeight: "bold",
  },
  alertMe: {
    fontSize: 20,
    color: "#2D86E4",
  },
  inputBox: {
    gap: 10,
  },
  content: {
    justifyContent: "flex-start",
    gap: 10,
  },
  iconPosition: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  icon: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderColor: "black",
    borderRadius: 30,
    borderWidth: 10,
  },
});
