import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ChatInput = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Ionicons name="happy-outline" size={30} color="#999" />
        <TextInput
          style={styles.input}
          placeholder="Type your message"
          value={message}
          onChangeText={setMessage}
          multiline
        />
        <TouchableOpacity onPress={handleSend}>
          <Ionicons name="send" size={30} color="#007AFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: "#eee",
    padding: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  input: {
    flex: 1,
    marginHorizontal: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: 8,
  },
});

export default ChatInput;
