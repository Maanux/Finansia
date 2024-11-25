import { StatusBar } from "expo-status-bar";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  RootTagContext,
} from "react-native";
import container from "../components/style/Login/container";
import blockLogin from "../components/style/Login/blockLogin";
import titleLogin from "../components/style/Login/titleLogin";
import placeholder from "../components/style/Login/placeHolder";
import buttonLogin from "../components/style/Login/buttonLogin";
import singUp from "../components/style/Login/singUp";
import { router } from "expo-router";
import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const entra = () => {
    if (username === "kani" && password === "123") {
      router.push("./home/Home");
    } else {
      console.log("Erro no login");
    }
  };
  const register = () => {
    router.push("./register");
  };
  return (
    <View style={container.container}>
      <Text style={blockLogin.blockLogin2}></Text>
      <View style={blockLogin.blockLogin1}>
        <Text style={titleLogin.titleLogin}>Login</Text>

        <View style={blockLogin.blockLogin3}>
          <Text style={placeholder.placeholderText}>Apelido</Text>
          <TextInput
            value={username}
            onChangeText={setUsername}
            style={placeholder.placeholder}
            placeholder=""
          ></TextInput>
          <Text style={placeholder.placeholderText}>Senha</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            style={placeholder.placeholder}
            placeholder=""
            secureTextEntry={true}
          ></TextInput>
          <TouchableOpacity style={buttonLogin.buttonLogin} onPress={entra}>
            <Text style={buttonLogin.textButton}>Logar</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={singUp.singUp} onPress={register}>
              Não tem conta? Inscrever-se
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
