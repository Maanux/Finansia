import { StatusBar } from "expo-status-bar";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import container from "../components/style/Register/containerRegister";
import blockLogin from "../components/style/Register/blockRegister";
import titleLogin from "../components/style/Register/titleRegister";
import placeholder from "../components/style/Register/placeHolder";
import buttonLogin from "../components/style/Register/buttonRegister";
import singUp from "../components/style/Register/singUp";
import { router } from "expo-router";

export default function register() {
  const registrar = () => {
    router.back();
  };
  const voltarLogin = () => {
    router.back();
  };
  return (
    <View style={container.container}>
      <Text style={blockLogin.blockLogin2}></Text>
      <View style={blockLogin.blockLogin1}>
        <Text style={titleLogin.titleLogin}>Registre-se</Text>

        <View style={blockLogin.blockLogin3}>
          <Text style={placeholder.placeholderText}>Primeiro Nome</Text>
          <TextInput
            style={placeholder.placeholder}
            placeholder=" "
          ></TextInput>
          <Text style={placeholder.placeholderText}>Ultimo Nome</Text>
          <TextInput
            style={placeholder.placeholder}
            placeholder=" "
          ></TextInput>
          <Text style={placeholder.placeholderText}>Apelido</Text>
          <TextInput
            style={placeholder.placeholder}
            placeholder=" "
          ></TextInput>
          <Text style={placeholder.placeholderText}>Senha</Text>
          <TextInput
            style={placeholder.placeholder}
            placeholder=" "
            secureTextEntry={true}
          ></TextInput>
          <Text style={placeholder.placeholderText}>Confirme a senha</Text>
          <TextInput
            style={placeholder.placeholder}
            placeholder=" "
            secureTextEntry={true}
          ></TextInput>
          <TouchableOpacity style={buttonLogin.buttonLogin} onPress={registrar}>
            <Text style={buttonLogin.textButton}>Registrar</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={singUp.singUp} onPress={voltarLogin}>
              Já tem alguma conta? Entre
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
