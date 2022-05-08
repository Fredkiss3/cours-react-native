import * as React from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { Button } from "./button";
import { CartContext, CartItem } from "./cart.context";
import { useContext } from "react";

export interface CartItemProps {
  item: CartItem;
}

export function CartItemComponent({ item }: CartItemProps) {
  const { removeItem } = useContext(CartContext);
  const { poster_uri, title, price, quantity } = item;

  const removeItemFromCart = () => {
    removeItem(item);

    Alert.alert("Succès", "Element retiré du panier avec succès !");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.filmCover}
        source={{
          uri: `https://www.themoviedb.org/t/p/w1280/${poster_uri}`,
        }}
      />

      <View style={styles.filmText}>
        <View style={styles.filmTitleHeader}>
          <Text style={styles.filmTitle}>{title}</Text>
          <Text style={styles.filmRating}>{price * quantity} €</Text>
        </View>

        <Text style={styles.filmDescription}>Quantité: {quantity}</Text>

        <Text style={styles.filmDescription}>Prix Unitaire: {price} €</Text>

        <Button
          variant={`danger`}
          onClick={removeItemFromCart}
          text={`Retirer du panier 📦`}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 5,
  },

  filmCover: {
    flex: 1,
    height: 200,
    backgroundColor: "red",
  },

  filmText: {
    flex: 2,
    paddingHorizontal: 10,
    flexDirection: "column",
  },

  filmTitleHeader: {
    flex: 1,
    flexDirection: "row",
  },

  filmTitle: {
    flex: 3,
    fontSize: 20,
    fontWeight: "bold",
  },

  filmRating: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
    color: `blue`,
  },

  filmDescription: {
    flex: 3,
    fontSize: 18,
    marginVertical: 10,
  },

  filmReleaseDate: {
    flex: 1,
    fontSize: 18,
  },
});
