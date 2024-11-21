import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";

const LocationInput: React.FC = () => (
  <View style={styles.inputContainer}>
    <MaterialIcons name="location-on" size={25} />
    <TextInput style={styles.input} placeholder="Location" />
    <RNPickerSelect
      onValueChange={(value) => console.log(value)}
      items={[
        { label: "NewYork", value: "ny" },
        { label: "LosAngeles", value: "la" },
        { label: "Chicago", value: "chicago" },
      ]}
      style={pickerSelectStyles}
      useNativeAndroidPickerStyle={false}
      placeholder={{ label: "Select a location...", value: null }}
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    paddingLeft: 8,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderWidth: 2,
    borderColor: "black",
    color: "black",
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 5,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: "black",
    color: "black",
  },
});

export default LocationInput;
