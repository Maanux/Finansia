import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import AcTion from "../../components/AcTion";
import container from "../../components/style/Home/Saldo/containerSaldo";
import placeholder from "../../components/style/Login/placeHolder";

export default function Saldo() {
  const [salario, setSalario] = useState("");
  const [novoSalario, setNovoSalario] = useState("");

  const alterarSalario = () => {
    if (novoSalario.trim() !== "") {
      setSalario(`R$ ${novoSalario}`);
      setNovoSalario("");
    }
  };
  return (
    <ActionSheetProvider>
      <View style={container.container}>
        <View style={container.action}>
          <AcTion />
        </View>
        <View style={container.bloco}>
          <Text style={container.texto}>Saldo</Text>
          <Text style={container.textoSalario}>Salario {salario}</Text>

          <Text style={container.valor}>R$ 1.899,00</Text>
        </View>
        <View style={container.blocoSalario}>
          <TextInput
            style={placeholder.placeholder}
            value={novoSalario}
            onChangeText={setNovoSalario}
            keyboardType="numeric"
          ></TextInput>
          <TouchableOpacity
            style={container.botaoSalario}
            onPress={alterarSalario}
          >
            <Text style={container.botaoTextoSalario}>Alterarar Salario</Text>
          </TouchableOpacity>
        </View>
        <View style={container.blocoGanhos}>
          <Text style={placeholder.placeholderText}>Nome</Text>
          <TextInput style={placeholder.placeholder}></TextInput>
          <Text style={placeholder.placeholderText}>Valor</Text>
          <TextInput style={placeholder.placeholder}></TextInput>
          <TouchableOpacity style={container.botaoSalario}>
            <Text style={container.botaoTextoSalario}>Adicionar os Ganhos</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ActionSheetProvider>
  );
}
