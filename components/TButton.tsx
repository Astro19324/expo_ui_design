import {
  Text,
  Pressable,
  type ButtonProps,
  StyleSheet,
  View,
} from "react-native";

export type TButtonProps = ButtonProps & {
  type?: "sm" | "md" | "lg" | "xl";
};

export default function ThemedButton({
  type = "md",
  title,
  onPress,
}: TButtonProps) {
  return (
    <View style={{ flex: 1 }}>
      <Pressable
        style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }, styles.border]}
        onPress={onPress}
      >
        <Text style={styles[type]}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  border: {
    borderWidth: 2,
    borderColor: "#101010",
    borderRadius: 10,
    backgroundColor: "#101010",
  },
  sm: {
    fontSize: 15,
  },
  md: {
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: "white",
  },
  lg: {
    fontSize: 25,
  },
  xl: {
    minHeight: 170,
    paddingTop: 30,
    paddingLeft: 20,
    fontSize: 30,
  },
});
