import * as React from "react";
import { BgImage } from "./BgImage";
import { SelectGroup } from "./SelectGroup";
import { StyleSheet, Text, View } from "react-native";
import { UnitsPerMode, Unit, Mode } from "./utils";
import { Button } from "./button";

export interface UnitChoiceProps {
  navigation: any;
  route: {
    params: {
      mode: Mode;
    };
  };
}

export function UnitChoice({
  route: {
    params: { mode },
  },
  navigation,
}: UnitChoiceProps) {
  const [unitFrom, setUnitFrom] = React.useState<Unit | null>(null);
  const [unitTo, setUnitTo] = React.useState<Unit | null>(null);

  return (
    <BgImage>
      <View>
        <Text style={styles.label}>Convertisseur d'unités</Text>

        <SelectGroup
          onChange={(newValue) => {
            setUnitFrom(newValue as Unit);
          }}
          options={UnitsPerMode[mode].map((unit) => ({
            label: unit.label,
            value: unit.symbol,
          }))}
          selectedValue={unitFrom}
          label={`Choisir l'unité de départ`}
        />
        <SelectGroup
          onChange={(newValue) => {
            setUnitTo(newValue as Unit);
          }}
          options={UnitsPerMode[mode].map((unit) => ({
            label: unit.label,
            value: unit.symbol,
          }))}
          selectedValue={unitTo}
          label={`Choisir l'unité de destination`}
        />

        <Button
          text={`Suivant`}
          disabled={!unitFrom || !unitTo}
          onClick={() =>
            navigation.navigate(`Converter`, {
              mode,
              unitFrom,
              unitTo,
            })
          }
        />
      </View>
    </BgImage>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 30,
    color: `blue`,
    textAlign: `center`,
    marginBottom: 20,
  },
});
