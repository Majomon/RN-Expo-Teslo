import { View, Text, TextInputProps } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface Props extends TextInputProps {
  icon?: keyof typeof Ionicons.glyphMap;
}

const ThemedTextInput = ({ icon, ...rest }: Props) => {
  return (
    <View >
      <Text>ThemedTextInput</Text>
    </View>
  );
};

export default ThemedTextInput;
