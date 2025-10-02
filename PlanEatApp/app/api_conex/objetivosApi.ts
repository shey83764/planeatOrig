import { ApiFetch } from "./api";

export const guardarObjetivosUsuario = async (data: {
  user_id: number;
  objetivo: string;
  nivelActividad: string;
}) => {
  return ApiFetch("/api/objetivos", {
    method: "POST",
    body: JSON.stringify(data),
  });
};