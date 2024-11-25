import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import AcTion from "../../components/AcTion";
import container from "../../components/style/Home/GastisCreditos/containerCredito";
import placeholder from "../../components/style/Login/placeHolder";

export default function GastosCreditos() {
  return (
    <ActionSheetProvider>
      <View style={container.container}>
        <View style={container.action}>
          <AcTion />
        </View>
        <View style={container.bloco}>
          <Text style={container.texto}>Gastos Creditos</Text>
          <Text style={container.valor}>R$ -499,00</Text>
        </View>

        <View style={container.blocoGanhos}>
          <Text style={placeholder.placeholderText}>Nome</Text>
          <TextInput style={placeholder.placeholder}></TextInput>
          <Text style={placeholder.placeholderText}>Valor</Text>
          <TextInput style={placeholder.placeholder}></TextInput>
          <TouchableOpacity style={container.botaoSalario}>
            <Text style={container.botaoTextoSalario}>
              Adicionar Gasto de Credito
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ActionSheetProvider>
  );
}
