import { apiFetch } from "./api";

export const guardarPerfilUsuario = async (data: {
  user_id: number;
  nombre: string;
  apellido: string;
  email: string;
}) => {
  return apiFetch("/api/users/perfil", {
    method: "POST",
    body: JSON.stringify(data),
  });
};
