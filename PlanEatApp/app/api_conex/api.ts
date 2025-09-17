import Constants from "expo-constants";

const localhost = "10.0.2.2"; // Android Emulator
const localIP = "192.168.1.103"; // Tu PC en la red WiFi
const port = 3000; // Puerto donde corre tu backend

// Detecta en qué entorno estamos
// - Si estás en un dispositivo físico con Expo Go → usa tu IP local
// - Si estás en un emulador Android → usa 10.0.2.2
// - Si estás en iOS Simulator → localhost funciona
const getBaseURL = () => {
  if (Constants.platform?.ios) {
    return `http://localhost:${port}`;
  }
  if (Constants.platform?.android) {
    return `http://${localhost}:${port}`;
  }

  return `http://${localIP}:${port}`; // fallback para dispositivos reales
};

const BASE_URL = getBaseURL();

// Función genérica para hacer requests
export const apiFetch = async (endpoint: string, options: RequestInit = {}) => {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      ...options,
    });

    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("❌ Error en apiFetch:", error);
    throw error;
  }
};
