import { ApiFetch } from "./api"; // ✅ Correcto

// Guardar o actualizar progreso
export const saveProgressApi = async (data: {
  user_id: string;
  fecha: string; // formato YYYY-MM-DD
  peso?: number;
  grasa?: number;
  musculo?: number;
  calorias_consumidas?: number;
  actividad?: string;
}) => {
  return ApiFetch("/api/progress/save", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data), // 🔹 body convertido a JSON
  });
};

// Obtener todo el progreso de un usuario
export const getProgressByUserApi = async (user_id: string) => {
  return ApiFetch(`/api/progress/user/${user_id}`, {
    method: "GET",
  });
};

// Obtener progreso de un usuario en una fecha específica
export const getProgressByDateApi = async (user_id: string, fecha: string) => {
  return ApiFetch(`/api/progress/user/${user_id}/${fecha}`, {
    method: "GET",
  });
};

// Eliminar progreso por fecha
export const deleteProgressApi = async (user_id: string, fecha: string) => {
  return ApiFetch(`/api/progress/user/${user_id}/${fecha}`, {
    method: "DELETE",
  });
};
