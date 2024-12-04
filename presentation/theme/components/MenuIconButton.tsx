import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useThemeColor } from "../hooks/useThemeColor";

interface Props {
  onPress: () => void;
  icon: keyof typeof Ionicons.glyphMap;
}

export const MenuIconButton = ({ onPress, icon }: Props) => {
  const primaryColor = useThemeColor({}, "primary");

  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name={icon} size={24} color={primaryColor} />
    </TouchableOpacity>
  );
};
