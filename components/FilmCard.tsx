import { StyleSheet, Text, View, Image } from "react-native";

export type Film = {
  id: number;
  title: string;
  release_date: string;
  poster_uri: string;
  description: string;
  rating: number;
}

export function FilmCard({
  poster_uri,
  title,
  release_date,
  description,
  rating,
}: Film) {
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
          <Text
            style={{
              ...styles.filmRating,
              color: `${
                rating >= 7 ? "#28B463" : rating >= 5 ? "#F39C12" : "#E74C3C"
              }`,
            }}
          >
            {rating}
          </Text>
        </View>
        <Text style={styles.filmDescription}>
          {description.substring(0, 150)}...
        </Text>
        <Text style={styles.filmReleaseDate}>Sorti le {release_date}</Text>
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
