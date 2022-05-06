import * as React from "react";
import { BgImage } from "./BgImage";
import {convertValue, Mode, Unit, UnitsPerMode} from "./utils";
import { StyleSheet, Text, TextInput, View } from "react-native";

export interface ConverterProps {
  route: {
    params: {
      mode: Mode;
      unitFrom: Unit;
      unitTo: Unit;
    };
  };
}

export function Converter({
  route: {
    params: { mode, unitFrom, unitTo },
  },
}: ConverterProps) {
  const [value, setValue] = React.useState<string>(`0`);

  const result = React.useMemo(() => {
    if (unitFrom && unitTo && !isNaN(Number(value))) {
      // Trouver les bons multiplicateurs
      const multiplierFrom = UnitsPerMode[mode].find(
        (unit) => unit.symbol === unitFrom
      )?.multiplier;
      const multiplierTo = UnitsPerMode[mode].find(
        (unit) => unit.symbol === unitTo
      )?.multiplier;

      if (multiplierFrom && multiplierTo) {
        return convertValue(
          Number(value),
          multiplierFrom,
          multiplierTo,
          unitFrom,
          unitTo
        );
      }
    }
    return 0;
  }, [unitFrom, unitTo, value]);

  return (
    <BgImage>
      <View>
        <Text style={styles.label}>Résultat</Text>
        <Text style={styles.labelSubtitle}>Conversion {unitFrom} ➡️ {unitTo}</Text>

        <TextInput
          style={styles.input}
          placeholder="Entrez une valeur"
          placeholderTextColor="#797979"
          keyboardType="numeric"
          value={value.toString()}
          onChangeText={(newValue) => {
            setValue(newValue);
          }}
        />

        <TextInput
          style={styles.inputDisabled}
          placeholder="Résultat"
          placeholderTextColor="#797979"
          editable={false}
          value={`${result} ${unitTo}`}
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

  labelSubtitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
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

  inputDisabled: {
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor: `#c0c0c0`,
    borderRadius: 5,
    borderBottomColor: `blue`,
    borderBottomWidth: 1,
  },
});
