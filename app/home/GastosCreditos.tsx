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

  // Busca os gastos ao carregar o componente
  useEffect(() => {
    fetchGastos();
  }, []);

  // Função para buscar os gastos do usuário logado
  const fetchGastos = async () => {
    const usuarioLogado = await CacheService.getItem("usuarioLogado");
    if (usuarioLogado) {
      const gastos = await CreditoService.getGastosByUsuarioId(
        usuarioLogado.id
      );
      setGastos(gastos);

      // Calcular o total de gastos
      const total = gastos.reduce((acc, gasto) => acc + gasto.valor, 0);
      setTotalGastos(total);
    }
  };

  // Função para adicionar um novo gasto
  const handleAdicionarGasto = async () => {
    const usuarioLogado = await CacheService.getItem("usuarioLogado");
    if (usuarioLogado) {
      // Validação dos campos
      if (!nome || !valor || !dataHoraGasto) {
        console.log("Preencha todos os campos!");
        return;
      }

      // Converte o valor para número
      const valorNumerico = parseFloat(valor);
      if (isNaN(valorNumerico)) {
        console.log("Valor inválido!");
        return;
      }

      // Adiciona o gasto
      await CreditoService.addGasto(
        usuarioLogado.id,
        nome,
        valorNumerico,
        dataHoraGasto
      );

      // Limpa os campos e atualiza a lista
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
    color: "red",
  },
  gastoData: {
    fontSize: 12,
    color: "#777",
  },
};
