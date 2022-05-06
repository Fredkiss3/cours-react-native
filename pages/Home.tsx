import * as React from "react";
import { Button, View } from "react-native";

export interface HomeProps {
  navigation: any;
}

export function Home({ navigation }: HomeProps) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Button
        title={`FilmListPage`}
        onPress={() => {
          navigation.navigate("Film List");
        }}
      />

      <Button
        title={`Register Page`}
        onPress={() => {
          navigation.navigate("Register");
        }}
      />

      <Button
        title={`Profiles List Page`}
        onPress={() => {
          navigation.navigate("Profile List");
        }}
      />

      <Button
        title={`Convertisseur Page`}
        onPress={() => {
          navigation.navigate("Convertisseur");
        }}
      />
    </View>
  );
}
