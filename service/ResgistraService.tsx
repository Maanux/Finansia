import { View, Text } from "react-native";
import React from "react";

import { router } from "expo-router";
import { supabase } from "./supaBase";

export default function UserService() {
  //-----------------------------------------

  async function createUser(
    primeiroNome: string,
    ultimoNome: string,
    apelido: string,
    senha: string
  ): Promise<Boolean> {
    const { error } = await supabase.from("usuario").upsert([
      {
        primeiro_nome: primeiroNome,
        ultimo_nome: ultimoNome,
        apelido: apelido,
        senha: senha,
      },
    ]);

    if (error == null) {
      router.back();
      return true;
    } else {
      console.log(error);
    }
    return false;
  }

  //-----------------------------------------

  async function registrar(
    primeiroNome: string,
    ultimoNome: string,
    apelido: string,
    senha: string
  ) {
    let res = await createUser(primeiroNome, ultimoNome, apelido, senha);
    if (res) {
      router.back();
    } else {
      console.log("Erro ao registrar usuário.");
    }
  }

  //-----------------------------------------

  const voltarLogin = () => {
    router.back();
  };

  return { registrar, voltarLogin };
}
