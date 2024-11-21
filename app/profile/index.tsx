import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import { Link, router } from "expo-router";
import Layout from "@/components/Layout";
import TButton from "@/components/TButton";

export default function Profile() {
  return (
    <Layout>
      <View style={styles.head}>
        <Link href="/profile" style={[styles.textSize, styles.textColor]}>
          Sign-in / Register
        </Link>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  head: {
    height: 70,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  content: {
    flex: 1,
    gap: 10,
    flexDirection: "column",
  },

  textSize: {
    fontSize: 20,
  },
  textColor: { color: "#88BAEF" },
});
