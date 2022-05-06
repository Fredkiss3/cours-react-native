import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export interface SelectGroupProps {
  label: string;
  options: {
    label: string;
    value: string;
  }[];
  selectedValue: string | null;
  onChange: (value: string) => void;
}

export function SelectGroup({
  label,
  options,
  onChange,
  selectedValue,
}: SelectGroupProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {options.map((option, index) => (
        <TouchableOpacity
          key={option.value}
          style={{
            ...styles.option,
            ...(index === 0 ? styles.optionFirst : {}),
            ...(index === options.length - 1 ? styles.optionLast : {}),
          }}
          onPress={() => onChange(option.value)}
        >
          <Text
            style={{
              color: selectedValue === option.value ? "blue" : "#fff",
              opacity: selectedValue === option.value ? 1 : 0
            }}
          >
            ✔️
          </Text>
          <Text style={styles.optionText}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  group: {
    flex: 1,
    flexDirection: "column",
  },

  option: {
    height: 40,
    padding: 10,
    backgroundColor: `#fff`,
    borderColor: `blue`,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
  },

  optionFirst: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  optionLast: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomWidth: 0,
  },

  optionText: {
    marginLeft: 10,
  },
});
