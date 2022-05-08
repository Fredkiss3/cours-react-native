import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { BgImage } from "./BgImage";

type RegisterPageProps = {
  navigation: {
    navigate: (routeName: string) => void;
  };
};

export function RegisterPage({ navigation }: RegisterPageProps) {
  const correctCredentials = {
    username: "admin",
    password: "admin",
  };

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleLogin = () => {
    if (
      username === correctCredentials.username &&
      password === correctCredentials.password
    ) {
      Alert.alert("Login Successful", "Welcome to the app", [
        {
          text: "OK",
          onPress: () => {
            navigation.navigate("Market");
          },
        },
      ]);
    } else {
      setError("Username or password is incorrect");
    }
  };

  return (
    <BgImage>
      <View style={styles.container}>
        <Text style={styles.label}>Login</Text>

        {error ? <Text style={styles.error}>{error}</Text> : <></>}

        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#797979"
          onChangeText={(text) => {
            setUsername(text);
            setError("");
          }}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#797979"
          secureTextEntry
          onChangeText={(text) => {
            setPassword(text);
            setError("");
          }}
          value={password}
        />
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </BgImage>
  );
}

const styles = StyleSheet.create({
  error: {
    color: "#E74C3C",
    fontSize: 15,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#E74C3C",
    backgroundColor: "#F5B7B1",
    margin: 12,
  },

  bgImage: {
    flex: 1,
    justifyContent: `center`,
  },

  label: {
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
