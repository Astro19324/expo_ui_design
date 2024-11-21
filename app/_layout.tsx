import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="topic" />
      <Stack.Screen
        name="modal"
        options={{
          presentation: "modal",
          animation: "fade",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
