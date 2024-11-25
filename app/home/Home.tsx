import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import AcTion from "../../components/AcTion";
import container from "../../components/style/Home/container";
import saldo from "../../components/style/Home/saldo";
import gastosMensais from "../../components/style/Home/gastosMensais";
import gastosCreditos from "../../components/style/Home/gastosCreditos";
import sobrou from "../../components/style/Home/sobrou";
import { router } from "expo-router";

export default function Home() {
  const vaiSaldo = () => {
    router.push("./Saldo");
  };
  const vaiGastosMensais = () => {
    router.push("./GastosMensais");
  };
  const vaiGastosCreditos = () => {
    router.push("./GastosCreditos");
  };
  return (
    <ActionSheetProvider>
      <View style={container.container}>
        <View style={container.Action}>
          <AcTion />
        </View>
        <TouchableOpacity style={saldo.saldo} onPress={vaiSaldo}>
          <Text style={saldo.texto}>Saldo</Text>
          <Text style={saldo.valor}>R$ 1.899,00</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={vaiGastosMensais}
          style={gastosMensais.gastosMensais}
        >
          <Text style={gastosMensais.texto}>Gastos Mensais</Text>
          <Text style={gastosMensais.valor}>R$ -899,00</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={vaiGastosCreditos}
          style={gastosCreditos.gastosCreditos}
        >
          <Text style={gastosCreditos.texto}>Gastos / Credito</Text>
          <Text style={gastosCreditos.valor}>R$ -499,00</Text>
        </TouchableOpacity>
        <TouchableOpacity style={sobrou.sobrou}>
          <Text style={sobrou.texto}>Sobrou</Text>
          <Text style={sobrou.valor}>R$ 501,00</Text>
        </TouchableOpacity>
      </View>
    </ActionSheetProvider>
  );
}
