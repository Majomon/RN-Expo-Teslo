import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { ThemedView } from "@/presentation/theme/components/ThemedView";
import ThemedTextInput from "@/presentation/theme/components/ThemedTextInput";

const ProductScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Ionicons name="camera-outline" size={25} />,
    });
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView>
        <ThemedView style={{ marginHorizontal: 10 }}>
          <ThemedTextInput style={{ marginVertical: 5 }} placeholder="Títuto" />
          <ThemedTextInput style={{ marginVertical: 5 }} placeholder="Slug" />
          <ThemedTextInput
            style={{ marginVertical: 5 }}
            placeholder="Descripción"
            multiline
            numberOfLines={5}
          />
        </ThemedView>
        <ThemedView
          style={{
            marginHorizontal: 10,
            marginVertical: 5,
            flexDirection: "row",
            gap: 10,
          }}
        >
          <ThemedTextInput style={{ flex: 1 }} placeholder="Precio" />
          <ThemedTextInput style={{ flex: 1 }} placeholder="Inventario" />
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ProductScreen;
