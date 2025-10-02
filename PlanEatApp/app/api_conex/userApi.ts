// app/api_conex/userApi.ts
import { ApiFetch } from "./api";

// Obtener datos del perfil de un usuario por ID
export const getPerfilUsuarioApi = async (user_id: string) => {
  return ApiFetch(`/api/user/${user_id}`, {
    method: "GET",
  });
};

// Guardar perfil nuevo o datos del usuario
export const savePerfilUsuarioApi = async (data: any) => {
  return ApiFetch("/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

// Actualizar perfil existente de un usuario
export const updatePerfilUsuarioApi = async (user_id: string, data: any) => {
  return ApiFetch(`/api/user/${user_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
