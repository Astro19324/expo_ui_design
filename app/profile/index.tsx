import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";
import Layout from "@/components/Layout";

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
