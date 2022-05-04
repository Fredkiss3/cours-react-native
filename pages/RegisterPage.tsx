import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export function RegisterPage() {
  return (
    <ImageBackground
      source={{
        uri: `https://images.unsplash.com/photo-1521288936840-032bc23139ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80`,
      }}
      resizeMode={`cover`}
      style={styles.bgImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Registration</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#797979"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#797979"
          placeholder="Email"
          keyboardType={`email-address`}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#797979"
          secureTextEntry
        />
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    justifyContent: `center`,
  },

  title: {
    fontSize: 30,
    color: `blue`,
    textAlign: `center`,
    marginBottom: 20,
  },

  container: {
    flex: 1,
    justifyContent: `center`,
    paddingHorizontal: 10,
  },

  input: {
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor: `#fff`,
    borderRadius: 5,
    borderBottomColor: `blue`,
    borderBottomWidth: 1,
  },

  button: {
    backgroundColor: `blue`,
    color: `white`,
    margin: 12,
    padding: 10,
    textAlign: `center`,
    borderRadius: 5,
    marginTop: 10,
  },

  buttonText: {
    color: `white`,
    fontSize: 15,
    textAlign: `center`,
  },
});
