import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import container from "@/components/container/container";
import backgroundRegister from "@/components/Register/backgroundRegister";
import tituloRegister from "@/components/Register/tituloRegister";
import placeholder from "@/components/Register/placeHolderRegister";
import botaoRegistar from "@/components/Register/botaoRegistrar";
import registrada from "@/components/Register/contaRegistradaTexto";
import { router } from "expo-router";

export default function register() {
  const voltaLogin = () => {
    router.back();
  };
  return (
    <ScrollView>
      <View style={container.container}>
        <View style={backgroundRegister.backgroundRegister}>
          <Text style={tituloRegister.tituloRegister}>Registre-se</Text>
          <Text style={placeholder.placeholderTitulo}>Primeiro Nome</Text>
          <TextInput style={placeholder.placeholderTexto}></TextInput>
          <Text style={placeholder.placeholderTitulo}>Último Nome</Text>
          <TextInput style={placeholder.placeholderTexto}></TextInput>
          <Text style={placeholder.placeholderTitulo}>Apelido</Text>
          <TextInput style={placeholder.placeholderTexto}></TextInput>
          <Text style={placeholder.placeholderTitulo}>Senha</Text>
          <TextInput style={placeholder.placeholderTexto}></TextInput>
          <Text style={placeholder.placeholderTitulo}>Confirme a Senha</Text>
          <TextInput style={placeholder.placeholderTexto}></TextInput>
          <TouchableOpacity style={botaoRegistar.botaoRegistar}>
            <Text style={botaoRegistar.textoBotao}>Registar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={voltaLogin}>
            <Text style={registrada.registrada}>Já tem uma conta? Entre</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
