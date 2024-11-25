import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
} from "react-native";

type FormInput = {
  title: string;
} & TouchableOpacityProps;

export default function ActionFormButton({ title, ...rest }: FormInput) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
    marginBottom: 8,
    backgroundColor: "#808080",
    borderRadius: 4,
    padding: 12,
    width: "80%",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
  },
  title: {
    fontWeight: "bold",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
