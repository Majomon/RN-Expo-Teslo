import * as SecureStore from "expo-secure-store";
import { Alert } from "react-native";

export class SecureStorageAdapter {
  static async setItem(key: string, value: string) {
    try {
      await SecureStore.setItemAsync(key, value);
    } catch (error) {
      Alert.alert("Error", "Error en guardar la data.");
    }
  }

  static async getITem(key: string) {
    try {
      return await SecureStore.getItemAsync(key);
    } catch (error) {
      Alert.alert("Error", "Error en pedir la data.");
      return null;
    }
  }

  static async deleteItem(key: string) {
    try {
      return await SecureStore.deleteItemAsync(key);
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Error al intentar borrar la data.");
    }
  }
}
