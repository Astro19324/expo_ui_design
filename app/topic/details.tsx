import { StyleSheet, View, Text, Pressable } from "react-native";
import Layout from "@/components/Layout";
import SearchInput from "@/components/SearchInput";
import UserCard from "@/components/UserCard";
import CustomCard from "@/components/CustomCard";

import userData from "@/assets/json/userData.json";
import customData from "@/assets/json/customData.json";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Profile() {
  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text>Back</Text>
          <Text>Topic</Text>
          <Text>Alert Me</Text>
        </View>
        <SearchInput />
        <View style={styles.textContainer}>
          <Text style={styles.button}>Filter A</Text>
          <Text style={styles.button}>Filter B</Text>
          <Text style={styles.button}>Filter C</Text>
        </View>
        <UserCard
          name={userData[0].name}
          category={userData[0].category}
          description={userData[0].description}
        />
        <View style={styles.custom}>
          {customData.map((custom, index) => (
            <CustomCard
              name={custom.name}
              description={custom.description}
              key={index}
            />
          ))}
        </View>
        <Pressable style={styles.iconPosition}>
          <MaterialIcons
            name="edit"
            size={30}
            color="white"
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
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  textContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
    borderWidth: 2,
    borderColor: "black",
    textAlign: "center",
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  custom: {
    paddingTop: 10,
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
    backgroundColor: "black",
    borderColor: "black",
    borderRadius: 30,
    borderWidth: 15,
  },
});
