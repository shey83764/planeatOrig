import { ApiFetch } from "./api";

// Guardar o actualizar receta
export const saveRecetaApi = async (data: {
  receta_id?: string;
  nombre: string;
  descripcion?: string;
  ingredientes: string;
  pasos: string;
  tiempo_preparacion?: number;
  usuario_id: string;
}) => {
  return ApiFetch("/api/recetas/save", {
    method: "POST",
    headers: { "Content-Type": "application/json" }, // 🔹 Header para JSON
    body: JSON.stringify(data), // 🔹 body convertido a JSON
  });
};

// Obtener todas las recetas de un usuario
export const getRecetasByUserApi = async (usuario_id: string) => {
  return ApiFetch(`/api/recetas/user/${usuario_id}`, { method: "GET" });
};

// Obtener receta por ID
export const getRecetaByIdApi = async (receta_id: string) => {
  return ApiFetch(`/api/recetas/${receta_id}`, { method: "GET" });
};

// Eliminar receta
export const deleteRecetaApi = async (receta_id: string) => {
  return ApiFetch(`/api/recetas/${receta_id}`, { method: "DELETE" });
};
