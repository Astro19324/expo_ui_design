import { useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Modal from "@/components/Modal";

const TopicModal = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [state, setState] = useState(true);

  const onSubmit = async () => {
    if (email.length) {
      setState(false);
    }
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

        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
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
    color: "#DBDBDB",
  },

  enable: {
    borderWidth: 1,
    borderColor: "black",
    width: "100%",
    paddingVertical: 13,
    paddingHorizontal: 20,
  },
  disable: {
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderColor: "#DBDBDB",
    color: "#DBDBDB",
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
    width: 150,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  submitText: {
    fontSize: 20,
    color: "white",
  },
});

export default TopicModal;
