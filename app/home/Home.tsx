import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import containerHome from "../../components/Home/containerHome";
import saldo from "@/components/Home/saldo";
import gastosMensais from "@/components/Home/gastosMensais";
import gastosCreditos from "@/components/Home/gastosCredito";
import sobrou from "@/components/Home/sobrou";

export default function Home() {
  return (
    // <ScrollView>
    <View style={containerHome.container}>
      <TouchableOpacity style={saldo.saldoBotao}>
        <Text style={saldo.textoSaldo}>Saldo</Text>
        <Text style={saldo.valorSaldo}>R$ 1.899,00</Text>
      </TouchableOpacity>
      <TouchableOpacity style={gastosMensais.gastosMensaisBotao}>
        <Text style={gastosMensais.textoGastosMensais}>Gastos Mensais</Text>
        <Text style={gastosMensais.valorGastosMensais}>R$ -899,00</Text>
      </TouchableOpacity>
      <TouchableOpacity style={gastosCreditos.gastosCreditosBotao}>
        <Text style={gastosCreditos.textoGastosCreditos}>
          Gastos de Credito
        </Text>
        <Text style={gastosCreditos.valorGastosCreditos}>R$ -499,00</Text>
      </TouchableOpacity>
      <TouchableOpacity style={sobrou.sobrouBotao}>
        <Text style={sobrou.textosobrou}>Sobrou</Text>
        <Text style={sobrou.valorsobrou}>R$ 501,00</Text>
      </TouchableOpacity>
    </View>
    // </ScrollView>
  );
}
