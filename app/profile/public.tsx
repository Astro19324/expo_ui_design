import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { router } from "expo-router";
import Layout from "@/components/Layout";

const Public = () => {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [personality, setPersonality] = useState("");
  const [refProfile, setRefProfile] = useState("");
  const [bio, setBio] = useState("");

  const levels = ["Novice", "Amateur", "Expert"];
  const personalities = ["Introvert", "Ambivert", "Extrovert"];

  return (
    <Layout home="black" message="black" account="red">
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <Text>Back</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.profileSection}>
            <View style={styles.avatarContainer}>
              <FontAwesome6 name="circle-user" size={120} color="black" />
              <TouchableOpacity onPress={() => {}} style={styles.editUser}>
                <FontAwesome5 name="user-edit" size={24} color="black" />
              </TouchableOpacity>
            </View>

            <View>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Your Name"
                value={name}
                onChangeText={setName}
              />

              <Text style={styles.label}>Level</Text>
              <View style={styles.buttonGroup}>
                {levels.map((item) => (
                  <TouchableOpacity
                    key={item}
                    style={[
                      styles.optionButton,
                      level === item && styles.selectedButton,
                    ]}
                    onPress={() => setLevel(item)}
                  >
                    <Text
                      style={[
                        styles.optionText,
                        level === item && styles.selectedOptionText,
                      ]}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <Text style={styles.label}>Personality</Text>
              <View style={styles.buttonGroup}>
                {personalities.map((item) => (
                  <TouchableOpacity
                    key={item}
                    style={[
                      styles.optionButton,
                      personality === item && styles.selectedButton,
                    ]}
                    onPress={() => setPersonality(item)}
                  >
                    <Text
                      style={[
                        styles.optionText,
                        personality === item && styles.selectedOptionText,
                      ]}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <Text style={styles.label}>Ref profile</Text>
              <TextInput
                style={styles.input}
                placeholder="Ref profile URL"
                value={refProfile}
                onChangeText={setRefProfile}
              />

              <Text style={styles.label}>Bio</Text>
              <TextInput
                style={[styles.input, styles.bioInput]}
                placeholder="Type bio"
                value={bio}
                onChangeText={setBio}
                multiline
                numberOfLines={4}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.updateButton}>
                <Text style={styles.updateButtonText}>Update</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingHorizontal: 16,
    borderBottomColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  profileSection: {
    padding: 20,
  },
  avatarContainer: {
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    padding: 12,
    fontSize: 16,
    marginBottom: 8,
  },
  bioInput: {
    height: 100,
    textAlignVertical: "top",
  },
  buttonGroup: {
    flexDirection: "row",
    marginBottom: 8,
  },
  optionButton: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: "#000",
    borderColor: "#000",
  },
  optionText: {
    color: "#000",
  },
  selectedOptionText: {
    color: "#fff",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  updateButton: {
    width: 150,
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  updateButtonText: {
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingVertical: 12,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
  },
  editUser: {
    position: "absolute",
    right: 90,
    bottom: 0,
  },
});

export default Public;
