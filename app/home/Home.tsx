import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import UsuarioService from "@/service/UsuarioService";
import GanhosService from "@/service/GanhosService";
import MensaisService from "@/service/MensaisService";
import CreditoService from "@/service/CreditoService";
import containerHome from "@/components/styles/Home/containerHome";
import saldo from "@/components/styles/Home/saldo";
import gastosMensais from "@/components/styles/Home/gastosMensais";
import gastosCreditos from "@/components/styles/Home/gastosCredito";
import sobrou from "@/components/styles/Home/sobrou";

type Usuario = {
  id: number;
};

export default function Home() {
  const [totalGanhos, setTotalGanhos] = useState(0);
  const [totalGastosMensais, setTotalGastosMensais] = useState(0);
  const [totalGastosCredito, setTotalGastosCredito] = useState(0);

  useEffect(() => {
    async function fetchDadosFinanceiros() {
      const usuarioLogado =
        (await UsuarioService.getUsuarioLogado()) as Usuario | null;
      if (usuarioLogado) {
        const somaGanhos = await GanhosService.getTotalGanhos(usuarioLogado.id);
        const somaGastosMensais = await MensaisService.getTotalGastos(
          usuarioLogado.id
        );
        const somaGastosCredito = await CreditoService.getTotalGastos(
          usuarioLogado.id
        );

        setTotalGanhos(somaGanhos);
        setTotalGastosMensais(somaGastosMensais);
        setTotalGastosCredito(somaGastosCredito);
      }
    }

    fetchDadosFinanceiros();
  }, []);

  // Função para atualizar os dados financeiros após adicionar ganhos ou gastos
  const recarregarDados = async () => {
    const usuarioLogado =
      (await UsuarioService.getUsuarioLogado()) as Usuario | null;
    if (usuarioLogado) {
      const somaGanhos = await GanhosService.getTotalGanhos(usuarioLogado.id);
      const somaGastosMensais = await MensaisService.getTotalGastos(
        usuarioLogado.id
      );
      const somaGastosCredito = await CreditoService.getTotalGastos(
        usuarioLogado.id
      );

      setTotalGanhos(somaGanhos);
      setTotalGastosMensais(somaGastosMensais);
      setTotalGastosCredito(somaGastosCredito);
    }
  };

  return (
    <View style={containerHome.container}>
      <TouchableOpacity style={saldo.saldoBotao} onPress={recarregarDados}>
        <Text style={saldo.textoSaldo}>Saldo</Text>
        <Text style={saldo.valorSaldo}>R$ {totalGanhos.toFixed(2)}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={gastosMensais.gastosMensaisBotao}>
        <Text style={gastosMensais.textoGastosMensais}>Mensais</Text>
        <Text style={gastosMensais.valorGastosMensais}>
          R$ -{totalGastosMensais.toFixed(2)}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={gastosCreditos.gastosCreditosBotao}
        onPress={recarregarDados}
      >
        <Text style={gastosCreditos.textoGastosCreditos}>Crédito</Text>
        <Text style={gastosCreditos.valorGastosCreditos}>
          R$ -{totalGastosCredito.toFixed(2)}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={sobrou.sobrouBotao}>
        <Text style={sobrou.textosobrou}>Sobrou</Text>
        <Text style={sobrou.valorsobrou}>
          R${" "}
          {(totalGanhos - totalGastosMensais - totalGastosCredito).toFixed(2)}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
