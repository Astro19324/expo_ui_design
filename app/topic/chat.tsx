import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Header from "@/components/Header";
import ChatMessages from "@/components/ChatMessageBox";
import ChatInput from "@/components/ChatInput";

import chatMessages from "@/assets/json/chatMessages.json";

export default function App() {
  const [messages, setMessages] = useState(chatMessages);

  const handleSend = (message: string) => {
    if (message.trim()) {
      setMessages([
        ...messages,
        { id: Date.now(), text: message, isUser: true },
      ]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Header name="John Smith" />
        <ChatMessages messages={messages} />
        <ChatInput onSend={handleSend} />
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
