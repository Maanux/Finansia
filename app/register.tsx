import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import container from "@/components/styles/container/container";
import backgroundRegister from "@/components/styles/Register/backgroundRegister";
import tituloRegister from "@/components/styles/Register/tituloRegister";
import placeholder from "@/components/styles/Register/placeHolderRegister";
import botaoRegistar from "@/components/styles/Register/botaoRegistrar";
import registrada from "@/components/styles/Register/contaRegistradaTexto";
import UserService from "@/service/ResgistraService"; // Verifique o nome correto aqui!

export default function Register() {
  const [primeiroNome, setPrimeironome] = useState("");
  const [ultimoNome, setUltimoNome] = useState("");
  const [apelido, setApelido] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmeSenha, setConfirmeSenha] = useState("");

  const { registrar, voltarLogin } = UserService();

  // Função para validar se todos os campos estão preenchidos
  const validarCampos = () => {
    return primeiroNome && ultimoNome && apelido && senha && confirmeSenha;
  };

  const handleRegister = () => {
    if (senha !== confirmeSenha) {
      console.log("As senhas não coincidem!");
      return;
    }
    registrar(primeiroNome, ultimoNome, apelido, senha);
  };

  return (
    <ScrollView>
      <View style={container.container}>
        <View style={backgroundRegister.backgroundRegister}>
          <Text style={tituloRegister.tituloRegister}>Registre-se</Text>
          <Text style={placeholder.placeholderTitulo}>Primeiro Nome</Text>
          <TextInput
            value={primeiroNome}
            onChangeText={setPrimeironome}
            style={placeholder.placeholderTexto}
          />
          <Text style={placeholder.placeholderTitulo}>Último Nome</Text>
          <TextInput
            value={ultimoNome}
            onChangeText={setUltimoNome}
            style={placeholder.placeholderTexto}
          />
          <Text style={placeholder.placeholderTitulo}>Apelido</Text>
          <TextInput
            value={apelido}
            onChangeText={setApelido}
            style={placeholder.placeholderTexto}
          />
          <Text style={placeholder.placeholderTitulo}>Senha</Text>
          <TextInput
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={true}
            style={placeholder.placeholderTexto}
          />
          <Text style={placeholder.placeholderTitulo}>Confirme a Senha</Text>
          <TextInput
            value={confirmeSenha}
            onChangeText={setConfirmeSenha}
            secureTextEntry={true}
            style={placeholder.placeholderTexto}
          />
          <TouchableOpacity
            onPress={handleRegister}
            style={[
              botaoRegistar.botaoRegistar,
              !validarCampos() && { backgroundColor: "#ccc" },
            ]}
            disabled={!validarCampos()}
          >
            <Text style={botaoRegistar.textoBotao}>Registar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={voltarLogin}>
            <Text style={registrada.registrada}>Já tem uma conta? Entre</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
