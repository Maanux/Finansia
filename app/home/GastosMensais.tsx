import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import AcTion from "../../components/AcTion";
import container from "../../components/style/Home/GastosMensais/containerMensais";
import placeholder from "../../components/style/Login/placeHolder";

export default function GastosMensais() {
  return (
    <ActionSheetProvider>
      <View style={container.container}>
        <View style={container.action}>
          <AcTion />
        </View>
        <View style={container.bloco}>
          <Text style={container.texto}>Gastos Mensais</Text>
          <Text style={container.valor}>R$ -899,00</Text>
        </View>

        <View style={container.blocoGanhos}>
          <Text style={placeholder.placeholderText}>Nome</Text>
          <TextInput style={placeholder.placeholder}></TextInput>
          <Text style={placeholder.placeholderText}>Valor</Text>
          <TextInput style={placeholder.placeholder}></TextInput>
          <TouchableOpacity style={container.botaoSalario}>
            <Text style={container.botaoTextoSalario}>
              Adicionar Gasto Mensal
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ActionSheetProvider>
  );
}
