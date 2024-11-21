import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import { Link, router } from "expo-router";
import Layout from "@/components/Layout";
import TButton from "@/components/TButton";

export default function Home() {
  const onClick = (path: String) => {
    router.push(path);
  };

  return (
    <Layout>
      <View style={styles.head}>
        <Text style={styles.textSize}>Welcome</Text>

        <Link href="/modal" style={[styles.textSize, styles.textColor]}>
          Sign-in / Register
        </Link>
      </View>

      <ScrollView>
        <View style={styles.content}>
          <TButton
            title="Profile"
            type="xl"
            onPress={() => onClick("/profile")}
          />
          <TButton title="Topic" type="xl" onPress={() => onClick("/topic")} />
          <TButton title="Post" type="xl" />
        </View>
      </ScrollView>
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
