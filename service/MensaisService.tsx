import { supabase } from "./supaBase";
import CacheService from "./CacheService";

export default class MensaisService {
  // Busca todos os gastos de um usuário pelo ID
  static async getGastosByUsuarioId(usuarioId: number) {
    try {
      const { data, error } = await supabase
        .from("gastos_mensais")
        .select("*")
        .eq("usuario_id", usuarioId);

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      console.error("Erro ao buscar gastos:", error);
      return [];
    }
  }

  // Adiciona um novo gasto
  static async addGasto(
    usuarioId: number,
    nome: string,
    valor: number,
    dataHoraGasto: string
  ) {
    try {
      const { data, error } = await supabase
        .from("gastos_mensais")
        .insert([
          {
            usuario_id: usuarioId,
            nome: nome,
            valor: valor,
            data_hora_gasto: dataHoraGasto,
          },
        ])
        .select();

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      console.error("Erro ao adicionar gasto:", error);
      return null;
    }
  }

  // Atualiza um gasto existente
  static async updateGasto(
    gastoId: number,
    nome: string,
    valor: number,
    dataHoraGasto: string
  ) {
    try {
      const { data, error } = await supabase
        .from("gastos_mensais")
        .update({
          nome: nome,
          valor: valor,
          data_hora_gasto: dataHoraGasto,
        })
        .eq("id", gastoId)
        .select();

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      console.error("Erro ao atualizar gasto:", error);
      return null;
    }
  }

  // Deleta um gasto
  static async deleteGasto(gastoId: number) {
    try {
      const { error } = await supabase
        .from("gastos_mensais")
        .delete()
        .eq("id", gastoId);

      if (error) {
        throw error;
      }

      return true;
    } catch (error) {
      console.error("Erro ao deletar gasto:", error);
      return false;
    }
  }

  // Retorna a soma total dos gastos mensais de um usuário
  static async getTotalGastos(usuarioId: number) {
    try {
      const { data, error } = await supabase
        .from("gastos_mensais")
        .select("valor")
        .eq("usuario_id", usuarioId); // Certifique-se de filtrar por `usuario_id`

      if (error) {
        throw error;
      }

      const total = data.reduce((acc, gasto) => acc + gasto.valor, 0);
      return total;
    } catch (error) {
      console.error("Erro ao calcular total dos gastos:", error);
      return 0;
    }
  }
}
