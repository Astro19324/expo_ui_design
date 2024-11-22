import { Stack } from "expo-router";

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
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
