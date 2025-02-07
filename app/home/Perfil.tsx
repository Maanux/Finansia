import { View, Text, TouchableOpacity, BackHandler } from "react-native";
import React from "react";
import container from "@/components/Home/containerHome";
import perfil from "@/components/Perfil/blocoPerfil";
import useNavigationExitOnBack from "../../hooks/useNavigationExitOnBac";

export default function Perfil() {
  return (
    <View style={perfil.backGroundPerfil}>
      <View style={perfil.blocoPerfil}>
        <Text style={perfil.bemVindoPerfil}>Bem vindo a Finansia</Text>
        <Text style={perfil.nomeCompleto}>Emanuel dos Santos Kanetchny</Text>
        <TouchableOpacity onPress={() => BackHandler.exitApp()}>
          <Text style={perfil.sairPerfil}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
