import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import container from "@/components/Home/containerHome";
import saldo from "@/components/Saldo/saldoQuadrado";
import adicionaSaldo from "@/components/Saldo/adicionaSaldo";
import placeholderSaldo from "@/components/Saldo/placeHolderSaldo";
import DataHora from "@/components/DataEHora";

// Definição do tipo Ganho
type Ganho = {
  id: number;
  titulo: string;
  valor: string;
  data: string;
};

export default function Saldo() {
  // Tipando o estado corretamente
  const [ganhos, setGanhos] = useState<Ganho[]>([
    { id: 1, titulo: "Salário", valor: "R$ 2500,00", data: "01/02/2025 08:00" },
    {
      id: 2,
      titulo: "Freelance",
      valor: "R$ 300,00",
      data: "02/02/2025 14:30",
    },
    {
      id: 2,
      titulo: "Freelance",
      valor: "R$ 300,00",
      data: "02/02/2025 14:30",
    },
    {
      id: 3,
      titulo: "Freelance",
      valor: "R$ 300,00",
      data: "02/02/2025 14:30",
    },
    {
      id: 4,
      titulo: "Freelance",
      valor: "R$ 300,00",
      data: "02/02/2025 14:30",
    },
    {
      id: 5,
      titulo: "Freelance",
      valor: "R$ 300,00",
      data: "02/02/2025 14:30",
    },
    {
      id: 6,
      titulo: "Freelance",
      valor: "R$ 300,00",
      data: "02/02/2025 14:30",
    },
    {
      id: 7,
      titulo: "Freelance",
      valor: "R$ 300,00",
      data: "02/02/2025 14:30",
    },
    {
      id: 8,
      titulo: "Freelance",
      valor: "R$ 300,00",
      data: "02/02/2025 14:30",
    },
    {
      id: 9,
      titulo: "Freelance",
      valor: "R$ 300,00",
      data: "02/02/2025 14:30",
    },
    {
      id: 10,
      titulo: "Freelance",
      valor: "R$ 300,00",
      data: "02/02/2025 14:30",
    },
  ]);

  return (
    <View style={container.container}>
      <View style={saldo.quadradoSaldo}>
        <Text style={saldo.saldoTitulo}>Saldo</Text>
        <Text style={saldo.saldoTexto}>R$ 1.899,00</Text>
      </View>

      <View>
        <Text style={adicionaSaldo.textoTitulo}>Adicionar Ganhos</Text>
        <TextInput
          style={placeholderSaldo.placeholderSaldo}
          placeholder="Nome"
        />
        <TextInput
          style={placeholderSaldo.placeholderSaldo}
          placeholder="Valor"
        />
        <DataHora />
        <TouchableOpacity style={adicionaSaldo.botaoSaldo}>
          <Text style={adicionaSaldo.textoBotao}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Vou colocar a lista de ganhos aqui teste */}

        {ganhos.map((ganho) => (
          <View key={ganho.id} style={styles.ganhoBloco}>
            <Text style={styles.ganhoTitulo}>{ganho.titulo}</Text>
            <Text style={styles.ganhoValor}>{ganho.valor}</Text>
            <Text style={styles.ganhoData}>{ganho.data}</Text>
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
