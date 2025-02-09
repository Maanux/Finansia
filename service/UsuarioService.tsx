import CacheService from "./CacheService";

export default class UsuarioService {
  static async getUsuarioLogado() {
    return await CacheService.getItem("usuarioLogado");
  }
}
