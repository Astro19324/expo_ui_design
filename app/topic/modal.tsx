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
          <Text style={styles.titleText}>Message</Text>
          <TextInput
            multiline={true}
            style={styles.textArea}
            placeholder="Type your message"
            textAlignVertical="top"
          />
        </View>
        <View>
          <Text style={styles.titleText}>Type</Text>
          <View style={{ flexDirection: "row" }}>
            {["Option A", "Option B", "Option C"].map((buttonText, index) => (
              <Text style={styles.button} key={index}>
                {buttonText}
              </Text>
            ))}
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
            style={styles.postButton}
            onPress={() => router.push("/topic/chat")}
          >
            <Text style={styles.postText}>Post</Text>
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

  titleText: {
    fontSize: 20,
    paddingBottom: 10,
  },
  text: {
    fontSize: 20,
    paddingLeft: 10,
  },
  textArea: {
    height: 120,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 2,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
    textAlign: "center",
    fontSize: 17,
    paddingVertical: 7,
  },

  checkboxContianer: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
  },
  postButton: {
    height: 50,
    width: 140,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 5,
  },
  postText: {
    color: "white",
    fontSize: 20,
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
