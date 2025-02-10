import { supabase } from "./supaBase";
import CacheService from "./CacheService";

export default class GanhosService {
  // Busca todos os ganhos de um usuário pelo ID
  static async getGanhosByUsuarioId(usuarioId: number) {
    try {
      const { data, error } = await supabase
        .from("ganhos_mensais")
        .select("*")
        .eq("usuario_id", usuarioId);

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      console.error("Erro ao buscar ganhos:", error);
      return [];
    }
  }

  // Adiciona um novo ganho
  static async addGanho(
    usuarioId: number,
    titulo: string,
    valor: number,
    dataHoraGanho: string
  ) {
    try {
      const { data, error } = await supabase
        .from("ganhos_mensais")
        .insert([
          {
            usuario_id: usuarioId,
            nome: titulo,
            valor: valor,
            data_hora_ganho: dataHoraGanho,
          },
        ])
        .select();

      if (error) {
        throw error;
      }

      // Após adicionar o ganho, atualiza o total de ganhos
      const totalGanhos = await this.getTotalGanhos(usuarioId);

      return { data, totalGanhos };
    } catch (error) {
      console.error("Erro ao adicionar ganho:", error);
      return { data: null, totalGanhos: 0 };
    }
  }

  // Atualiza um ganho existente
  static async updateGanho(
    ganhoId: number,
    titulo: string,
    valor: number,
    dataHoraGanho: string
  ) {
    try {
      const { data, error } = await supabase
        .from("ganhos_mensais")
        .update({
          nome: titulo,
          valor: valor,
          data_hora_ganho: dataHoraGanho,
        })
        .eq("id", ganhoId)
        .select();

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      console.error("Erro ao atualizar ganho:", error);
      return null;
    }
  }

  // Deleta um ganho
  static async deleteGanho(ganhoId: number) {
    try {
      const { error } = await supabase
        .from("ganhos_mensais")
        .delete()
        .eq("id", ganhoId);

      if (error) {
        throw error;
      }

      return true;
    } catch (error) {
      console.error("Erro ao deletar ganho:", error);
      return false;
    }
  }

  // Busca a soma total dos ganhos de um usuário
  static async getTotalGanhos(usuarioId: number) {
    try {
      const { data, error } = await supabase
        .from("ganhos_mensais")
        .select("valor")
        .eq("usuario_id", usuarioId);

      if (error) {
        throw error;
      }

      const total = data.reduce((acc, ganho) => acc + Number(ganho.valor), 0);
      return total;
    } catch (error) {
      console.error("Erro ao calcular total de ganhos:", error);
      return 0;
    }
  }
}
