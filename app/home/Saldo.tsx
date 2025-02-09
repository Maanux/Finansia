import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import container from "@/components/styles/Home/containerHome";
import saldo from "@/components/styles/Saldo/saldoQuadrado";
import adicionaSaldo from "@/components/styles/Saldo/adicionaSaldo";
import placeholderSaldo from "@/components/styles/Saldo/placeHolderSaldo";
import DataHora from "@/components/DataEHora";
import CacheService from "@/service/CacheService";
import GanhosService from "@/service/GanhosService";

type Ganho = {
  id: number;
  nome: string;
  valor: number;
  data_hora_ganho: string;
};

export default function Saldo() {
  const [ganhos, setGanhos] = useState<Ganho[]>([]);
  const [titulo, setTitulo] = useState("");
  const [valor, setValor] = useState("");
  const [dataHoraGanho, setDataHoraGanho] = useState("");
  const [totalGanhos, setTotalGanhos] = useState(0);

  // Carrega os ganhos e o total de ganhos na renderização inicial
  useEffect(() => {
    const fetchDados = async () => {
      const usuarioLogado = await CacheService.getItem("usuarioLogado");
      if (usuarioLogado) {
        // Carrega os ganhos e o total de ganhos
        const ganhos = await GanhosService.getGanhosByUsuarioId(
          usuarioLogado.id
        );
        const total = await GanhosService.getTotalGanhos(usuarioLogado.id);

        setGanhos(ganhos);
        setTotalGanhos(total);
      }
    };

    fetchDados();
  }, []);

  // Função para recarregar os dados financeiros após adicionar um novo ganho
  const recarregarDados = async () => {
    const usuarioLogado = await CacheService.getItem("usuarioLogado");
    if (usuarioLogado) {
      const ganhosAtualizados = await GanhosService.getGanhosByUsuarioId(
        usuarioLogado.id
      );
      const totalAtualizado = await GanhosService.getTotalGanhos(
        usuarioLogado.id
      );

      setGanhos(ganhosAtualizados);
      setTotalGanhos(totalAtualizado);
    }
  };

  // Função para adicionar um novo ganho
  const handleAdicionarGanho = async () => {
    const usuarioLogado = await CacheService.getItem("usuarioLogado");
    if (usuarioLogado) {
      // Chama a função para adicionar o ganho e obter o total de ganhos atualizado
      const { totalGanhos } = await GanhosService.addGanho(
        usuarioLogado.id,
        titulo,
        parseFloat(valor),
        dataHoraGanho
      );

      setTitulo("");
      setValor("");
      setDataHoraGanho("");

      // Atualiza o estado do total de ganhos no componente
      setTotalGanhos(totalGanhos);

      // Atualiza a lista de ganhos e o total de ganhos após adicionar o novo ganho
      recarregarDados();
    }
  };

  return (
    <View style={container.container}>
      <View style={saldo.quadradoSaldo}>
        <Text style={saldo.saldoTitulo}>Saldo</Text>
        <Text style={saldo.saldoTexto}>R$ {totalGanhos.toFixed(2)}</Text>
      </View>

      <View>
        <Text style={adicionaSaldo.textoTitulo}>Adicionar Ganhos</Text>
        <TextInput
          style={placeholderSaldo.placeholderSaldo}
          placeholder="Nome"
          value={titulo}
          onChangeText={setTitulo}
        />
        <TextInput
          style={placeholderSaldo.placeholderSaldo}
          placeholder="Valor"
          value={valor}
          onChangeText={setValor}
          keyboardType="numeric"
        />
        <DataHora onDateSelected={(date) => setDataHoraGanho(date)} />
        <TouchableOpacity
          style={adicionaSaldo.botaoSaldo}
          onPress={handleAdicionarGanho}
        >
          <Text style={adicionaSaldo.textoBotao}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        {ganhos.map((ganho) => (
          <View key={String(ganho.id)} style={styles.ganhoBloco}>
            <Text style={styles.ganhoTitulo}>{String(ganho.nome)}</Text>
            <Text style={styles.ganhoValor}>
              R$ {Number(ganho.valor).toFixed(2)}
            </Text>
            <Text style={styles.ganhoData}>
              {String(ganho.data_hora_ganho)}
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
  ganhoBloco: {
    backgroundColor: "#e3e3e3",
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
  },
  ganhoTitulo: {
    fontSize: 16,
  },
  ganhoValor: {
    fontSize: 14,
    color: "green",
  },
  ganhoData: {
    fontSize: 12,
    color: "#777",
  },
};
