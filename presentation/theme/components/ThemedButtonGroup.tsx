import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useThemeColor } from "../hooks/useThemeColor";

interface Props {
  options: string[];
  selectOptions: string[];

  onSelect: (option: string) => void;
}

export const ThemedButtonGroup = ({
  options,
  selectOptions,
  onSelect,
}: Props) => {
  const primaryColor = useThemeColor({}, "primary");
  return (
    <View style={styles.container}>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          onPress={() => onSelect(option)}
          style={[
            styles.button,
            selectOptions.includes(option) && { backgroundColor: primaryColor },
          ]}
        >
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={[
              styles.buttonText,
              selectOptions.includes(option) && styles.selectButtonText,
            ]}
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    flex: 1,
    padding: 8,
    margin: 5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 12,
  },
  selectButtonText: {
    color: "#fff",
  },
});
