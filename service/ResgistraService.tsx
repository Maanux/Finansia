import { View, Text } from "react-native";
import React from "react";

import { router, useNavigation } from "expo-router";
import { supabase } from "./supaBase";
import { CommonActions } from "@react-navigation/native";

export default function UserService() {
  const navigation = useNavigation();
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
      navigation.dispatch(CommonActions.goBack());
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
