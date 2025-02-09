import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import container from "@/components/styles/container/container";
import tituloLogin from "@/components/styles/Index/tituloLogin";
import backgroundLogin from "@/components/styles/Index/backgroundLogin";
import placeholder from "@/components/styles/Index/placeHolderIndex";
import botaoLogar from "@/components/styles/Index/botaoLogar";
import inscrever from "@/components/styles/Index/inscreverSe";
import LoginService from "@/service/LoginService";

export default function Index() {
  const [apelido, setApelido] = useState("");
  const [senha, setSenha] = useState("");

  const { fazLogin, vaiParaRegister } = LoginService();

  const handleLogin = () => {
    fazLogin(apelido, senha);
  };

  return (
    <View style={container.container}>
      <View style={backgroundLogin.backgroundLogin}>
        <Text style={tituloLogin.titleLogin}>Login</Text>
        <Text style={placeholder.placeholderTitulo}>Apelido</Text>
        <TextInput
          value={apelido}
          onChangeText={setApelido}
          style={placeholder.placeholderTexto}
        ></TextInput>
        <Text style={placeholder.placeholderTitulo}>Senha</Text>
        <TextInput
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
          style={placeholder.placeholderTexto}
        ></TextInput>
        <TouchableOpacity style={botaoLogar.botaoLogin} onPress={handleLogin}>
          <Text style={botaoLogar.textoBotao}>Logar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={vaiParaRegister}>
          <Text style={inscrever.inscrever}>Não tem conta? Inscreva-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
