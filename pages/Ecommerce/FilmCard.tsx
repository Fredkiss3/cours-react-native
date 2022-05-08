import { StyleSheet, Text, View, Image, Alert } from "react-native";
import { Button } from "./button";
import { useContext } from "react";
import { CartContext } from "./cart.context";

export type Film = {
  id: number;
  title: string;
  release_date: string;
  poster_uri: string;
  description: string;
  rating: number;
};

export function FilmCard({
  poster_uri,
  title,
  release_date,
  description,
  rating,
  id,
}: Film) {
  const { addItem } = useContext(CartContext);

  const addItemToCart = () => {
    addItem({
      id,
      title,
      price: rating * 10,
      quantity: 1,
      poster_uri,
    });

    Alert.alert("Succès", "Element ajouté au panier avec succès");
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
          <Text style={styles.filmRating}>{rating * 10} €</Text>
        </View>
        <Text style={styles.filmDescription}>
          {description.substring(0, 100)}...
        </Text>
        <Text style={styles.filmReleaseDate}>Sorti le {release_date}</Text>
        <Button onClick={addItemToCart} text={`Ajouter au panier 📦`} />
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
    height: `100%`,
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
