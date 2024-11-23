import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import ProfileMenuItem from "@/components/ProifleMenuItem";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <MaterialCommunityIcons
          name="account-circle-outline"
          size={120}
          color="black"
        />
        <Text style={styles.name}>John Smith</Text>
      </View>

      <View style={styles.menuSection}>
        <ProfileMenuItem
          title="Edit public profile"
          subtitle="name · bio · picture"
          onPress={() => {}}
        />
        <ProfileMenuItem
          title="Edit private info"
          subtitle="contact infos for peers"
          onPress={() => {}}
        />
        <ProfileMenuItem title="Peers" subtitle="4" onPress={() => {}} />
        <ProfileMenuItem title="Alerts" subtitle="3" onPress={() => {}} />
        <ProfileMenuItem title="Change Email" onPress={() => {}} />
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={() => {}}>
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileSection: {
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  name: {
    fontSize: 25,
    fontWeight: "600",
    marginTop: 10,
  },
  menuSection: {
    paddingHorizontal: 16,
  },
  logoutButton: {
    marginTop: "auto",
    marginBottom: 80,
    marginHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 4,
    alignItems: "center",
  },
  logoutText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
