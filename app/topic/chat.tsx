import React, { useState } from "react";
import { StyleSheet, SafeAreaView, KeyboardAvoidingView } from "react-native";
import Header from "@/components/Header";
import ChatMessages from "@/components/ChatMessageBox";
import ChatInput from "@/components/ChatInput";

import chatMessages from "@/assets/json/chatMessages.json";

export default function App() {
  const [messages, setMessages] = useState(chatMessages);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Header name="John Smith" />
        <ChatMessages messages={messages} />
        <ChatInput />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
