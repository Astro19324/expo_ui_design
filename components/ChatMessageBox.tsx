import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

interface ChatMessagesProps {
  messages: Message[];
}

const ChatMessages = ({ messages }: ChatMessagesProps) => {
  return (
    <ScrollView style={styles.container}>
      {messages.map((message) => (
        <View
          key={message.id}
          style={[
            styles.messageContainer,
            message.isUser ? styles.userMessage : styles.otherMessage,
          ]}
        >
          {!message.isUser && (
            <View style={styles.avatar}>
              <Ionicons name="person-circle-outline" size={40} color="black" />
            </View>
          )}
          <View
            style={[
              styles.messageBubble,
              message.isUser ? styles.userBubble : styles.otherBubble,
            ]}
          >
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
          {message.isUser && (
            <View style={styles.avatar}>
              <Ionicons name="person-circle-outline" size={40} color="black" />
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  userMessage: {
    justifyContent: "flex-end",
  },
  otherMessage: {
    justifyContent: "flex-start",
  },
  avatar: {
    marginHorizontal: 15,
  },
  messageBubble: {
    padding: 12,
    borderRadius: 16,
  },
  userBubble: {
    backgroundColor: "#007AFF",
    borderBottomRightRadius: 4,
  },
  otherBubble: {
    backgroundColor: "#E9E9EB",
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 20,
  },
});

export default ChatMessages;
