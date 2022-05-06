import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SelectGroup } from "./Convertisseur/SelectGroup";

type Mode = `poids` | `longeur` | `devise` | `temperature`;
type Unit =
  | `kg`
  | `g`
  | `t`
  | `m`
  | `km`
  | `cm`
  | `euro`
  | `centimes`
  | `°c`
  | `°k`;

const UnitsPerMode: {
  [key in Mode]: { label: string; symbol: Unit; multiplier: number }[];
} = {
  poids: [
    { label: `Kilogrammes`, symbol: `kg`, multiplier: 1000 },
    { label: `Grammes`, symbol: `g`, multiplier: 1 },
    { label: `Tonnes`, symbol: `t`, multiplier: 1_000_000 },
  ],
  longeur: [
    { label: `Mètres`, symbol: `m`, multiplier: 100 },
    { label: `Kilomètres`, symbol: `km`, multiplier: 100_000 },
    { label: `Centimètres`, symbol: `cm`, multiplier: 1 },
  ],
  devise: [
    { label: `Euros`, symbol: `euro`, multiplier: 100 },
    { label: `Centimes`, symbol: `centimes`, multiplier: 1 },
  ],
  temperature: [
    { label: `Celsius`, symbol: `°c`, multiplier: 1 },
    { label: `Kelvin`, symbol: `°k`, multiplier: 1 },
  ],
};

function convertValue(
  value: number,
  multiplierFrom: number,
  multiplierTo: number,
  unitFrom: Unit,
  unitTo: Unit
) {
  const res = (value * multiplierFrom) / multiplierTo;

  if (unitFrom === `°k` && unitTo === `°c`) {
    return res - 273.15;
  } else if (unitFrom === `°c` && unitTo === `°k`) {
    return res + 273.15;
  } else {
    return res;
  }
}

export function Convertisseur() {
  const [mode, setMode] = React.useState<Mode>("poids");
  const [unitFrom, setUnitFrom] = React.useState<Unit | null>(null);
  const [unitTo, setUnitTo] = React.useState<Unit | null>(null);
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

  const [step, setStep] = React.useState<number>(0);

  const isSelectionValid = () => {
    switch (step) {
      case 0:
        return mode !== null;
      case 1:
        return unitFrom !== null && unitTo !== null;
      case 2:
        return true;
    }
  };

  return (
    <ImageBackground
      source={{
        uri: `https://images.unsplash.com/photo-1521288936840-032bc23139ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80`,
      }}
      resizeMode={`cover`}
      style={styles.bgImage}
    >
      <View style={styles.container}>
        <Text style={styles.label}>Convertisseur d'unités</Text>

        {step === 0 && (
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
        )}

        {step === 1 && (
          <>
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
          </>
        )}

        {step === 2 && (
          <>
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
          </>
        )}

        <TouchableOpacity
          onPress={() => {
            if ((step + 1) % 3 === 0) {
              setUnitFrom(null);
              setUnitTo(null);
            }

            setStep((step + 1) % 3);
          }}
          style={{
            ...styles.button,
            ...(!isSelectionValid() && styles.buttonDisabled),
          }}
          disabled={!isSelectionValid()}
        >
          <Text style={styles.buttonText}>
            {step === 2 ? `changer d'unité` : `Suivant`}
          </Text>
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

  inputDisabled: {
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor: `#c0c0c0`,
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

  buttonDisabled: {
    backgroundColor: `#c0c0c0`,
  },

  buttonText: {
    color: `white`,
    fontSize: 15,
    textAlign: `center`,
  },
});
