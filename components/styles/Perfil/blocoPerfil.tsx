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
    textAlign: "center",
  },
  bemVindoPerfil: {
    bottom: 130,
    textAlign: "center",
  },
  nomeCompleto: {
    bottom: 100,
    textAlign: "center",
  },
});

export default perfil;
