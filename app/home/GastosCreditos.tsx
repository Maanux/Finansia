import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import container from "@/components/styles/Home/containerHome";
import blocoCredito from "@/components/styles/GastosCredito/blocoCredito";
import DataHora from "@/components/DataEHora";
import placeholderCredito from "@/components/styles/GastosCredito/placeHolderCredito";
import adicionaCredito from "@/components/styles/GastosCredito/AdicionaCredito";
import CacheService from "@/service/CacheService";
import CreditoService from "@/service/CreditoService";

type Gasto = {
  id: number;
  nome: string;
  valor: number;
  data_hora_gasto: string;
};

export default function GastosCreditos() {
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
    const usuarioLogado = (await CacheService.getItem("usuarioLogado")) as {
      id: number;
    } | null;

    if (usuarioLogado?.id) {
      const gastos = await CreditoService.getGastosByUsuarioId(
        usuarioLogado.id
      );
      setGastos(gastos);
      const total = gastos.reduce((acc, gasto) => acc + gasto.valor, 0);
      setTotalGastos(total);
    }
  };

  const handleAdicionarGasto = async () => {
    if (!/^[0-9]+(\.[0-9]{1,2})?$/.test(valor)) {
      setErroValor("O valor deve conter apenas números!");
      return;
    }

    setErroValor("");

    const usuarioLogado = (await CacheService.getItem("usuarioLogado")) as {
      id: number;
    } | null;

    if (usuarioLogado?.id) {
      await CreditoService.addGasto(
        usuarioLogado.id,
        nome,
        parseFloat(valor),
        dataHoraGasto
      );
      setNome("");
      setValor("");
      setDataHoraGasto("");
      fetchGastos();
    }
  };

  return (
    <View style={container.container}>
      <View style={blocoCredito.bloco}>
        <Text style={blocoCredito.creditoTitulo}>Crédito</Text>
        <Text style={blocoCredito.creditoTexto}>
          R$ {totalGastos.toFixed(2)}
        </Text>
      </View>

      <View>
        <Text style={adicionaCredito.textoTitulo}>
          Adicionar Gastos Crédito
        </Text>
        <TextInput
          style={placeholderCredito.placeholderCredito}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={placeholderCredito.placeholderCredito}
          placeholder="Valor"
          value={valor}
          onChangeText={setValor}
          keyboardType="numeric"
        />
        {erroValor ? <Text style={styles.erroTexto}>{erroValor}</Text> : null}
        <DataHora onDateSelected={(date) => setDataHoraGasto(date)} />
        <TouchableOpacity
          style={adicionaCredito.botaoCredito}
          onPress={handleAdicionarGasto}
        >
          <Text style={adicionaCredito.textoBotao}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        {gastos.map((gasto) => (
          <View key={String(gasto.id)} style={styles.gastoBloco}>
            <Text style={styles.gastoTitulo}>{gasto.nome}</Text>
            <Text style={styles.gastoValor}>R$ {gasto.valor.toFixed(2)}</Text>
            <Text style={styles.gastoData}>{gasto.data_hora_gasto}</Text>
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
    color: "red",
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
