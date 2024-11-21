import React, { ReactNode } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import Animated, { FadeIn, SlideInDown } from "react-native-reanimated";
import { Link } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

type ModalProps = {
  children: ReactNode;
};

const Modal = ({ children }: ModalProps) => {
  return (
    <Animated.View entering={FadeIn} style={styles.root}>
      <Link href={"/"} asChild>
        <Pressable style={StyleSheet.absoluteFill} />
      </Link>

      <Animated.View entering={SlideInDown} style={styles.container}>
        <View
          style={{
            justifyContent: "flex-end",
            marginLeft: "auto",
          }}
        >
          <Link href={"/"}>
            <AntDesign name="closecircleo" size={40} color="black" />
          </Link>
        </View>
        <View style={styles.child}>{children}</View>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000040",
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
    padding: 20,
  },
  child: {
    flex: 1,
    width: "100%",
  },
});

export default Modal;
