import { StyleSheet } from "react-native";

const container = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CDCDCD",
    alignItems: "center",
    justifyContent: "center",
  },

  action: {
    bottom: 175,
    left: 180,
  },
  bloco: {
    backgroundColor: "#BBFAC7",
    paddingVertical: 25,
    paddingHorizontal: 130,
    borderColor: "#00FF62",
    borderWidth: 6,
    borderRadius: 5,
    marginBottom: 15,
    bottom: 170,
  },
  texto: {
    left: 40,
  },
  textoSalario: {
    left: 0,
  },
  valor: {
    fontSize: 22,
  },

  botaoSalario: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    backgroundColor: "black",
    borderRadius: 5,
  },
  botaoTextoSalario: {
    color: "#FFFFFF",
  },

  blocoSalario: {
    marginBottom: 17,
    bottom: 170,
  },
  blocoGanhos: {
    bottom: 150,
  },
});

export default container;
