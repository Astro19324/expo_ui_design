import { StyleSheet, View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import Layout from "@/components/Layout";
import SearchInput from "@/components/SearchInput";
import UserCard from "@/components/UserCard";
import CustomCard from "@/components/CustomCard";

import topicListData from "@/assets/json/topicListData.json";
import customData from "@/assets/json/customData.json";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Header from "@/components/Header";

export default function Profile() {
  return (
    <Layout home="black" message="red" account="black">
      <View style={styles.container}>
        <Header name="Topics" />
        <SearchInput />
        <View style={styles.buttonContainer}>
          {["Fiter A", "Fiter B", "Fiter C"].map((buttonText, index) => (
            <Text style={styles.button} key={index}>
              {buttonText}
            </Text>
          ))}
        </View>
        <UserCard
          name={topicListData[0].name}
          category={topicListData[0].category}
          description={topicListData[0].description}
        />
        <View style={styles.custom}>
          {customData.map((custom, index) => (
            <Link href="/topic/modal" key={index}>
              <CustomCard name={custom.name} description={custom.description} />
            </Link>
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
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
    borderWidth: 1,
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
