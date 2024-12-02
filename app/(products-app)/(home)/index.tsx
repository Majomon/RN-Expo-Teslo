import { View, Text } from "react-native";
import React from "react";
import { ThemedText } from "@/presentation/theme/components/ThemedText";

const HomeScreen = () => {
  return (
    <View style={{ paddingTop: 20, paddingHorizontal: 20 }}>
      <ThemedText style={{fontFamily:"KanitBold"}}>HomeScreen</ThemedText>
      <ThemedText style={{fontFamily:"KanitRegular"}}>HomeScreen</ThemedText>
      <ThemedText style={{fontFamily:"KanitThin"}}>HomeScreen</ThemedText>
    </View>
  );
};

export default HomeScreen;
