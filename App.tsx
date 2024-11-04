import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import container from "./components/style/container";
import blockLogin from "./components/style/blockLogin";
import titleLogin from "./components/style/titleLogin";
import placeholder from "./components/style/placeHolder";
import buttonLogin from "./components/style/buttonLogin";
import { Image } from "react-native";
import imageLogin from "./components/style/imageLogin";
import singUp from "./components/style/singUp";

export default function App() {
  return (
    <View style={container.container}>
      <Text style={blockLogin.blockLogin2}>
        <Image
          source={require("./assets/img/fn-transpa2.png")}
          style={imageLogin.imageLogin}
          resizeMode="contain"
        />
      </Text>
      <View style={blockLogin.blockLogin1}>
        <Text style={titleLogin.titleLogin}>Login</Text>
        <View style={blockLogin.blockLogin3}>
          <Text style={placeholder.placeholderText}>Username</Text>
          <TextInput
            style={placeholder.placeholder}
            placeholder="UserName"
          ></TextInput>
          <Text style={placeholder.placeholderText}>Password</Text>
          <TextInput
            style={placeholder.placeholder}
            placeholder="Password"
            secureTextEntry={true}
          ></TextInput>
          <TouchableOpacity
            style={buttonLogin.buttonLogin}
            onPress={() => console.log("precionada")}
          >
            <Text style={buttonLogin.textButton}>Login</Text>
          </TouchableOpacity>
          <Text style={singUp.singUp}>Don't have any account? Sing Up</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
