import { StyleSheet } from "react-native";

const perfil = StyleSheet.create({
  backGroundPerfil: {
    flex: 1,
    backgroundColor: "#050000",
    alignItems: "center",
    justifyContent: "center",
  },
  blocoPerfil: {
    backgroundColor: "#D9D9D9",
    paddingVertical: 195,
    paddingHorizontal: 75,
    borderRadius: 5,
  },
  sairPerfil: {
    color: "red",
    top: 125,
    left: 80,
  },
  bemVindoPerfil: {
    bottom: 130,
    left: 30,
  },
  nomeCompleto: {
    bottom: 100,
  },
});

export default perfil;
