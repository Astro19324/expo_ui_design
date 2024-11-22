import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import Footer from "./Footer";

type TLayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: TLayoutProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 10,
  },
  content: {
    flex: 1,
  },
});

export default Layout;
