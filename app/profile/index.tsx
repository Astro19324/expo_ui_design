import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import ProfileMenuItem from "@/components/ProifleMenuItem";
import Layout from "@/components/Layout";

const Profile = () => {
  return (
    <Layout home="black" message="black" account="red">
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
            onPress={() => router.push("/profile/public")}
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

        <View style={styles.logoutContainer}>
          <TouchableOpacity style={styles.logoutButton} onPress={() => {}}>
            <Text style={styles.logoutText}>Log out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  logoutContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoutButton: {
    width: 150,
    height: 50,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  logoutText: {
    fontSize: 18,
  },
});

export default Profile;
