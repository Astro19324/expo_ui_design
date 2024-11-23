import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import Bottom from "@/components/Bottom";

interface LayoutProps {
  children: ReactNode;
  home: string;
  message: string;
  account: string;
}

const Layout = ({ children, home, message, account }: LayoutProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
      <Bottom home={home} message={message} account={account} />
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
