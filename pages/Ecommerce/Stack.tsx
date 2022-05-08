import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { RegisterPage } from "./RegisterPage";
import { Cart, CartContext, CartItem } from "./cart.context";
import { ProductListPage } from "./ProductListPage";
import {CartPage} from "./CartPage";

const Stack = createNativeStackNavigator();

export function StackContainer() {
  const [cart, setCart] = React.useState<Cart>({
    items: [],
  });

  const addItemToCart = (item: CartItem) => {
    setCart((oldCart) => {
      const newCart = { ...oldCart };
      // check if item is already in cart
      const existingItem = newCart.items.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        // if item is already in cart, increase quantity
        existingItem.quantity += 1;
      } else {
        // if item is not in cart, add it
        newCart.items.push({ ...item, quantity: 1 });
      }

      return newCart;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem: addItemToCart,
        removeItem: (item) => {
          setCart({
            items: cart.items.filter((i) => i.id !== item.id),
          });
        },
      }}
    >
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={`Connexion`}>
            <Stack.Screen name="Connexion" component={RegisterPage} />
            <Stack.Screen name="Market" component={ProductListPage} />
            <Stack.Screen name="Panier" component={CartPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </CartContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: `center`,
  },
  bgImage: {
    flex: 1,
    justifyContent: `center`,
  },
});
