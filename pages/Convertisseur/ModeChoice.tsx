import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SelectGroup } from "./SelectGroup";
import { Mode, UnitsPerMode } from "./utils";
import { Button } from "./button";
import { BgImage } from "./BgImage";

export interface ModeChoiceProps {
  navigation: any;
}

export function ModeChoice({ navigation }: ModeChoiceProps) {
  const [mode, setMode] = React.useState<Mode>("poids");

  return (
    <BgImage>
      <View style={styles.container}>
        <Text style={styles.label}>Convertisseur d'unités</Text>

        <SelectGroup
          onChange={(newValue) => {
            setMode(newValue as Mode);
          }}
          options={Object.keys(UnitsPerMode).map((mode) => ({
            label: mode,
            value: mode,
          }))}
          selectedValue={mode}
          label={`Choisir votre mode`}
        />

        <Button
          text={`Suivant`}
          onClick={() =>
            navigation.navigate(`UnitChoice`, {
              mode,
            })
          }
        />
      </View>
    </BgImage>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: `center`,
    paddingHorizontal: 10,
  },

  label: {
    fontSize: 30,
    color: `blue`,
    textAlign: `center`,
    marginBottom: 20,
  },
});
