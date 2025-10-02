import { ApiFetch } from "./api";

export const guardarDatosUsuario = async (data: {
  user_id: number;
  calorias: number;
  proteinas: number;
  carbohidratos: number;
  grasas: number;
}) => {
  return ApiFetch("/api/datos", {
    method: "POST",
    body: JSON.stringify(data),
  });
};