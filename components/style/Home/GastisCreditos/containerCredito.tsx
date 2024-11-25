import { StyleSheet } from "react-native";

const container = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CDCDCD",
    alignItems: "center",
    justifyContent: "center",
  },

  action: {
    bottom: 245,
    left: 180,
  },
  bloco: {
    backgroundColor: "#F7FEC2",
    paddingVertical: 25,
    paddingHorizontal: 130,
    borderColor: "#FFFF0C",
    borderWidth: 6,
    borderRadius: 5,
    marginBottom: 15,
    bottom: 230,
  },
  texto: {
    left: 5,
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
