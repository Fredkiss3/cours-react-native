import * as React from "react";
import { Film, FilmCard } from "./FilmCard";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button } from "./button";

export interface ProductListPageProps {
  navigation: {
    navigate: (routeName: string) => void;
  };
}

export function ProductListPage({ navigation }: ProductListPageProps) {
  const [films, setFilms] = React.useState<Film[]>([]);

  React.useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=9c95f40eb3cd243e657ea32dc301e4f5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
    )
      .then((response) => response.json())
      .then((data) =>
        setFilms(
          data.results.map((film: any) => ({
            id: film.id,
            title: film.title,
            poster_uri: film.poster_path,
            description: film.overview,
            release_date: film.release_date,
            rating: film.vote_average,
          }))
        )
      );
  }, []);

  return (
    <View>
      <ScrollView style={styles.scollview}>
        {films.map((film) => (
          <FilmCard key={film.id} {...film} />
        ))}
      </ScrollView>
      <Button
        onClick={() => {
          navigation.navigate("Panier");
        }}
        text={`panier`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  scollview: {
    height: "90%",
  },
});
