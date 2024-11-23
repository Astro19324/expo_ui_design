import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Modal from "@/components/Modal";
import { router } from "expo-router";

const TopicModal = () => {
  return (
    <Modal>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Message</Text>
          <TextInput
            multiline={true}
            style={styles.textArea}
            placeholder="Type your message"
            textAlignVertical="top"
          />
        </View>
        <View>
          <Text style={styles.text}>Type</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.button}>Filter A</Text>
            <Text style={styles.button}>Filter B</Text>
            <Text style={styles.button}>Filter C</Text>
          </View>
        </View>
        <View style={styles.checkboxContianer}>
          <View style={styles.checkbox}>
            <TouchableOpacity
              style={[styles.box, { backgroundColor: "#D2E7B8" }]}
            />
            <TouchableOpacity style={styles.box} />
          </View>
          <Text style={styles.text}>I want to be notified</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.buttonPost}
            onPress={() => router.push("/topic/chat")}
          >
            <Text style={styles.textPost}>Post</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    paddingTop: 20,
  },

  text: {
    fontSize: 20,
    paddingBottom: 10,
  },
  textArea: {
    height: 100,
    borderColor: "black",
    borderWidth: 2,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  button: {
    flex: 1,
    borderWidth: 2,
    borderColor: "black",
    textAlign: "center",
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  checkboxContianer: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
  },
  buttonPost: {
    height: 50,
    width: 140,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  textPost: {
    color: "white",
    fontSize: 20,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
  },
  box: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: "black",
  },
  checkbox: {
    flexDirection: "row",
  },
});

export default TopicModal;
