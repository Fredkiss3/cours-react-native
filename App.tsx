import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FilmList } from "./pages/FilmList";
import { Home } from "./pages/Home";
import { RegisterPage } from "./pages/RegisterPage";
import { ProfileListPage } from "./pages/ProfileListPage";
import { Convertisseur } from "./pages/Convertisseur";
import { StackContainer } from "./pages/Convertisseur/Stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/*<NavigationContainer>*/}
      {/*  <Stack.Navigator initialRouteName={`Home`}>*/}
      {/*      <Stack.Screen name="Home"  >*/}
      {/*          {(props) => <Home {...props} />}*/}
      {/*      </Stack.Screen>*/}
      {/*    <Stack.Screen name="Film List" component={FilmList} />*/}
      {/*    <Stack.Screen name="Register" component={RegisterPage} />*/}
      {/*    <Stack.Screen name="Profile List" component={ProfileListPage} />*/}
      {/*    <Stack.Screen name="Convertisseur" component={Convertisseur} />*/}
      {/*  </Stack.Navigator>*/}
      {/*</NavigationContainer>*/}
      <StackContainer />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
