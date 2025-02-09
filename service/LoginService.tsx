import { View, Text } from "react-native";
import React from "react";
import { router } from "expo-router";
import { supabase } from "./supaBase";
import CacheService from "./CacheService";

export default function LoginService() {
  async function temUsuario(nickname: string): Promise<any> {
    const users = await supabase
      .from("usuario")
      .select()
      .eq("apelido", nickname);

    if (users.data == null) {
      return false;
    }

    for (let user of users.data) {
      return user;
    }

    return false;
  }

  function validaSenha(senhaEsperada: string, senhaBanco: string): Boolean {
    return senhaEsperada === senhaBanco;
  }

  async function fazLogin(username: string, password: string) {
    const possivelUser = await temUsuario(username);

    console.log(possivelUser);
    if (possivelUser != false) {
      if (validaSenha(password, possivelUser.senha)) {
        await CacheService.removeItem("usuarioLogado");
        await CacheService.setItem("usuarioLogado", possivelUser);

        console.log(await CacheService.getItem("usuarioLogado"));

        router.push("./home/Home");
      } else {
        console.log("SENHA ERRADA");
      }
    } else {
      router.push("./register");
    }
  }

  const vaiParaRegister = () => {
    router.push("/register");
  };

  return { fazLogin, vaiParaRegister };
}
