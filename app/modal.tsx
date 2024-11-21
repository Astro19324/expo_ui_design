import { useState } from "react";
import { TextInput, View, Text, StyleSheet, Pressable } from "react-native";

import Modal from "@/components/Modal";

const TopicModal = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [state, setState] = useState(true);

  const onSubmit = async () => {
    setState(false);
  };

  return (
    <Modal>
      <View style={styles.container}>
        <View style={styles.input}>
          <Text style={state ? styles.textEnable : styles.textDisable}>
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
            <Text style={styles.textEnable}>Enter Your Code</Text>
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

        <Pressable
          style={({ pressed }) => [
            { opacity: pressed ? 0.7 : 1 },
            styles.button,
          ]}
          onPress={onSubmit}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Submit</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    gap: 20,
    alignItems: "center",
  },
  textEnable: {
    fontSize: 20,
  },
  textDisable: {
    fontSize: 20,
    color: "#ECECEC",
  },

  enable: {
    borderWidth: 2,
    borderColor: "black",
    width: "100%",
    paddingVertical: 13,
    paddingHorizontal: 20,
  },
  disable: {
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderWidth: 2,
    borderColor: "#ECECEC",
    color: "#ECECEC",
    width: "100%",
  },
  input: {
    display: "flex",
    width: "100%",
    gap: 6,
    fontSize: 17,
  },
  button: {
    backgroundColor: "black",
    borderRadius: 5,
    borderWidth: 2,
    width: 150,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TopicModal;
