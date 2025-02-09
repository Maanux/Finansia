import { View, Text, TouchableOpacity, BackHandler } from "react-native";
import React, { useEffect, useState } from "react";
import perfil from "@/components/styles/Perfil/blocoPerfil";
import CacheService from "@/service/CacheService";
import { supabase } from "@/service/supaBase";

export default function Perfil() {
  const [nomeCompleto, setNomeCompleto] = useState<string>("");

  useEffect(() => {
    // Função para buscar os dados do usuário logado
    const fetchUser = async () => {
      const usuarioLogado = (await CacheService.getItem("usuarioLogado")) as {
        id: string;
      } | null;

      if (usuarioLogado?.id) {
        const { data, error } = await supabase
          .from("usuario")
          .select("primeiro_nome, ultimo_nome")
          .eq("id", usuarioLogado.id)
          .single();

        if (error) {
          console.error("Erro ao buscar dados do usuário:", error);
        } else if (data) {
          // Combina o primeiro e último nome
          setNomeCompleto(`${data.primeiro_nome} ${data.ultimo_nome}`);
        }
      }
    };

    fetchUser();
  }, []);

  return (
    <View style={perfil.backGroundPerfil}>
      <View style={perfil.blocoPerfil}>
        <Text style={perfil.bemVindoPerfil}>Bem-vindo a Finansia</Text>
        <Text style={perfil.nomeCompleto}>{nomeCompleto}</Text>
        <TouchableOpacity onPress={() => BackHandler.exitApp()}>
          <Text style={perfil.sairPerfil}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
