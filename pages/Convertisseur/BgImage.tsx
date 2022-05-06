import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

export interface BgImageProps {
  children: React.ReactNode;
}

export function BgImage({ children }: BgImageProps) {
  return (
    <ImageBackground
      source={{
        uri: `https://images.unsplash.com/photo-1521288936840-032bc23139ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80`,
      }}
      resizeMode={`cover`}
      style={styles.bgImage}
    >
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    justifyContent: `center`,
  },
});
