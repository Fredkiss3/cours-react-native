import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ModeChoice } from "./ModeChoice";
import { UnitChoice } from "./UnitChoice";
import { Converter } from "./Converter";

const Stack = createNativeStackNavigator();

export function StackContainer() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={`ModeChoice`}>
          <Stack.Screen name={`ModeChoice`} component={ModeChoice} />
          <Stack.Screen name={`UnitChoice`} component={UnitChoice} />
          <Stack.Screen name={`Converter`} component={Converter} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: `center`,
  },
  bgImage: {
    flex: 1,
    justifyContent: `center`,
  },
});
