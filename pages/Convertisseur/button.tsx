import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export interface ButtonProps {
  onClick: () => void;
  text: string;
  disabled?: boolean;
}

export function Button({ onClick, text, disabled = false }: ButtonProps) {
  return (
    <>
      <TouchableOpacity
        onPress={onClick}
        style={{
          ...styles.button,
          ...(disabled && styles.buttonDisabled),
        }}
        disabled={disabled}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: `blue`,
    color: `white`,
    margin: 12,
    padding: 10,
    textAlign: `center`,
    borderRadius: 5,
    marginTop: 10,
  },

  buttonDisabled: {
    backgroundColor: `#c0c0c0`,
  },

  buttonText: {
    color: `white`,
    fontSize: 15,
    textAlign: `center`,
  },
});
