import * as React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import { CartContext } from "./cart.context";
import { CartItemComponent } from "./CartItem";

export interface EcommerceProps {}

export function CartPage({}: EcommerceProps) {
  const {
    cart: { items },
  } = useContext(CartContext);

  const getTotal = () => {
    return items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  };

  return (
    <View
      style={{
        ...styles.container,
        ...(items.length === 0 && styles.emptyContainer),
      }}
    >
      {items.length > 0 ? (
        <>
          <ScrollView style={styles.scrollView}>
            {items.map((item) => (
              <CartItemComponent item={item} key={item.id} />
            ))}
          </ScrollView>
          <Text style={styles.resultText}>
            {items.length} films - Total {getTotal()} €
          </Text>
        </>
      ) : (
        <Text style={styles.emptyText}>Votre panier est vide</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollView: {
    height: "90%",
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  emptyText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#A6ACAF",
  },

  resultText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    backgroundColor: "#FFF",
  },
});
