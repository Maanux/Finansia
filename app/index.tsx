import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { router } from "expo-router";
import container from "@/components/container/container";
import tituloLogin from "@/components/Index/tituloLogin";
import backgroundLogin from "@/components/Index/backgroundLogin";
import placeholder from "@/components/Index/placeHolderIndex";
import botaoLogar from "@/components/Index/botaoLogar";
import inscrever from "@/components/Index/inscreverSe";

export default function Index() {
  const vaiparaHome = () => {
    router.push("./home/Home");
  };

  const vaiParaRegister = () => {
    router.push("/register");
  };

  return (
    <View style={container.container}>
      <View style={backgroundLogin.backgroundLogin}>
        <Text style={tituloLogin.titleLogin}>Login</Text>
        <Text style={placeholder.placeholderTitulo}>Apelido</Text>
        <TextInput style={placeholder.placeholderTexto}></TextInput>
        <Text style={placeholder.placeholderTitulo}>Senha</Text>
        <TextInput style={placeholder.placeholderTexto}></TextInput>
        <TouchableOpacity style={botaoLogar.botaoLogin} onPress={vaiparaHome}>
          <Text style={botaoLogar.textoBotao}>Logar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={vaiParaRegister}>
          <Text style={inscrever.inscrever}>Não tem conta? Inscreva-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
