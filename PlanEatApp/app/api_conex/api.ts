// api.ts
import { Platform } from "react-native";

// IP de tu PC (dispositivo físico)
const LOCAL_IP = "192.168.1.103";

// Emuladores
const EMULATOR_ANDROID = "10.0.2.2"; // Android Emulator
const EMULATOR_IOS = "localhost";    // iOS Simulator

// Puerto donde corre tu backend
const PORT = "3000";

// Base URL según plataforma
export const BASE_URL =
  Platform.OS === "android"
    ? `http://${EMULATOR_ANDROID}:${PORT}`
    : Platform.OS === "ios"
    ? `http://${EMULATOR_IOS}:${PORT}`
    : `http://${LOCAL_IP}:${PORT}`;

// Función fetch genérica renombrada a afiFetch
export async function ApiFetch(endpoint: string, options?: RequestInit) {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}`, options);
    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`);
    }
    return res.json();
  } catch (err) {
    console.error("API Fetch Error:", err);
    throw err;
  }
}
