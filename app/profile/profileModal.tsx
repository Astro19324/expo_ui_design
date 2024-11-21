import { useState } from "react";
import { Pressable, StyleSheet, TextInput, View, Text } from "react-native";
import Animated, { FadeIn, SlideInDown } from "react-native-reanimated";
import { Link } from "expo-router";
import TButton from "@/components/TButton";

import AntDesign from "@expo/vector-icons/AntDesign";

export default function Modal() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [state, setState] = useState(true);

  const onSubmit = async () => {
    setState(!state);
  };

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

        <View style={styles.input}>
          <Text style={state ? undefined : { color: "#ECECEC" }}>
            Enter Your Email
          </Text>
          <TextInput
            style={state ? styles.enable : styles.disable}
            onChangeText={setEmail}
            value={email}
            placeholder="Your Email"
            editable={state}
            placeholderTextColor={state ? "" : "#ECECEC"}
          />
        </View>

        {state === false ? (
          <View style={styles.input}>
            <Text>Enter Your Code</Text>
            <TextInput
              style={styles.enable}
              onChangeText={setCode}
              value={code}
              placeholder="Your Code"
            />
          </View>
        ) : (
          <View />
        )}

        <TButton title="Submit" onPress={onSubmit} />
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000040",
  },
  container: {
    width: "100%",
    height: "100%",
    gap: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
    padding: 20,
  },
  enable: {
    borderWidth: 2,
    borderColor: "black",
    width: "100%",
  },
  disable: {
    borderWidth: 2,
    borderColor: "#ECECEC",
    color: "#ECECEC",
    width: "100%",
  },
  input: {
    display: "flex",
    width: "100%",
    gap: 4,
  },
});
