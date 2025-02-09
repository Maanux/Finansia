import AsyncStorage from "@react-native-async-storage/async-storage";

class CacheService {
  private static instance: CacheService;

  private constructor() {} // Privado para impedir criação externa

  public static getInstance(): CacheService {
    if (!CacheService.instance) {
      CacheService.instance = new CacheService();
    }
    return CacheService.instance;
  }

  async setItem<T>(key: string, value: T): Promise<void> {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Erro ao salvar no cache:", error);
    }
  }

  async getItem<T>(key: string): Promise<T | null> {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? (JSON.parse(value) as T) : null;
    } catch (error) {
      console.error("Erro ao recuperar do cache:", error);
      return null;
    }
  }

  async removeItem(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error("Erro ao remover do cache:", error);
    }
  }
}

export default CacheService.getInstance();
