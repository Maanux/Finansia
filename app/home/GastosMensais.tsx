import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import container from "@/components/styles/Home/containerHome";
import mensais from "@/components/styles/GastosMensais/blocosMensais";
import DataHora from "@/components/DataEHora";
import adicionaMensal from "@/components/styles/GastosMensais/adicionaMensal";
import placeholderMensal from "@/components/styles/GastosMensais/placeHolderMensal";
import CacheService from "@/service/CacheService";
import MensaisService from "@/service/MensaisService";

type Gasto = {
  id: number;
  nome: string;
  valor: number;
  data_hora_gasto: string;
};

type UsuarioLogado = {
  id: number;
};

export default function GastosMensais() {
  const [gastos, setGastos] = useState<Gasto[]>([]);
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [dataHoraGasto, setDataHoraGasto] = useState("");
  const [totalGastos, setTotalGastos] = useState(0);
  const [erroValor, setErroValor] = useState("");

  useEffect(() => {
    fetchGastos();
  }, []);

  const fetchGastos = async () => {
    const usuarioLogado = (await CacheService.getItem(
      "usuarioLogado"
    )) as UsuarioLogado | null;
    if (usuarioLogado?.id) {
      const gastos = await MensaisService.getGastosByUsuarioId(
        usuarioLogado.id
      );
      setGastos(gastos);
      const total = gastos.reduce((acc, gasto) => acc + gasto.valor, 0);
      setTotalGastos(total);
    }
  };

  const recarregarDados = async () => {
    const usuarioLogado = (await CacheService.getItem(
      "usuarioLogado"
    )) as UsuarioLogado | null;
    if (usuarioLogado?.id) {
      const gastosAtualizados = await MensaisService.getGastosByUsuarioId(
        usuarioLogado.id
      );
      const totalAtualizado = await MensaisService.getTotalGastos(
        usuarioLogado.id
      );
      setGastos(gastosAtualizados);
      setTotalGastos(totalAtualizado);
    }
  };

  const handleAdicionarGasto = async () => {
    if (!/^[0-9]+(\.[0-9]{1,2})?$/.test(valor)) {
      setErroValor("O valor deve conter apenas números!");
      return;
    }

    setErroValor("");

    const usuarioLogado = (await CacheService.getItem(
      "usuarioLogado"
    )) as UsuarioLogado | null;
    if (usuarioLogado?.id) {
      await MensaisService.addGasto(
        usuarioLogado.id,
        nome,
        parseFloat(valor),
        dataHoraGasto
      );
      setNome("");
      setValor("");
      setDataHoraGasto("");
      recarregarDados();
    }
  };

  return (
    <View style={container.container}>
      <View style={mensais.blocoMensais}>
        <Text style={mensais.mensalTitulo}>Mensal</Text>
        <Text style={mensais.mensalTexto}>R$ {totalGastos.toFixed(2)}</Text>
      </View>

      <View>
        <Text style={adicionaMensal.textoTitulo}>Adicionar Gastos Mensais</Text>
        <TextInput
          style={placeholderMensal.placeholderMensal}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={placeholderMensal.placeholderMensal}
          placeholder="Valor"
          value={valor}
          onChangeText={setValor}
          keyboardType="numeric"
        />
        {erroValor ? <Text style={styles.erroTexto}>{erroValor}</Text> : null}
        <DataHora onDateSelected={(date) => setDataHoraGasto(date)} />
        <TouchableOpacity
          style={adicionaMensal.botaoMensal}
          onPress={handleAdicionarGasto}
        >
          <Text style={adicionaMensal.textoBotao}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        {gastos.map((gasto) => (
          <View key={String(gasto.id)} style={styles.gastoBloco}>
            <Text style={styles.gastoTitulo}>{String(gasto.nome)}</Text>
            <Text style={styles.gastoValor}>
              R$ {Number(gasto.valor).toFixed(2)}
            </Text>
            <Text style={styles.gastoData}>
              {String(gasto.data_hora_gasto)}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = {
  scrollView: {
    padding: 20,
    marginTop: 20,
  },
  gastoBloco: {
    backgroundColor: "#e3e3e3",
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
  },
  gastoTitulo: {
    fontSize: 16,
  },
  gastoValor: {
    fontSize: 14,
    color: "#FFFF0C",
  },
  gastoData: {
    fontSize: 12,
    color: "#777",
  },
  erroTexto: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
};
