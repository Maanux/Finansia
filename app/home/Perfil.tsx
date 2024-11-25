import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import perfil from "../../components/style/Perfil/perfil";
export default function Perfil() {
  const navigation = useNavigation();

  const sair = () => {
    console.log("lembrar de voltar");
  };
  return (
    <View style={perfil.perfil}>
      <View style={perfil.bloco}>
        <Text style={perfil.bemVindo}>Bem vindo a Finansia</Text>
        <Text style={perfil.nome}>Emanuel dos Santos Kanetchny</Text>
        <TouchableOpacity onPress={sair}>
          <Text style={perfil.sair}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
