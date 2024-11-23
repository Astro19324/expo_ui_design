import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Link, router } from "expo-router";
import Layout from "@/components/Layout";

const Home = () => {
  return (
    <Layout home="red" message="black" account="black">
      <View style={styles.head}>
        <Text style={styles.textSize}>Welcome</Text>

        <Link href="/modal" style={[styles.textSize, styles.textColor]}>
          Sign-in / Register
        </Link>
      </View>

      <ScrollView>
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => router.push("/profile/modal")}
            style={styles.block}
          >
            <Text style={styles.blockText}>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/topic")}
            style={styles.block}
          >
            <Text style={styles.blockText}>Topic</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/topic/details")}
            style={styles.block}
          >
            <Text style={styles.blockText}>Post</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  head: {
    height: 100,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  content: {
    flex: 1,
    gap: 10,
    flexDirection: "column",
  },
  block: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 3,
    height: 170,
    backgroundColor: "#eee",
    paddingTop: 40,
    paddingLeft: 20,
  },
  blockText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  textSize: {
    fontSize: 17,
  },
  textColor: { color: "#88BAEF" },
});

export default Home;
