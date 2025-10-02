import { ApiFetch } from "./api";

// Guardar o actualizar reminder
export const saveReminderApi = async (data: {
  reminder_id?: string;
  usuario_id: string;
  titulo: string;
  descripcion?: string;
  fecha_hora: string; // formato ISO
  tipo?: string;
}) => {
  return ApiFetch("/api/reminders/save", {
    method: "POST",
    headers: { "Content-Type": "application/json" }, // 🔹 Header para JSON
    body: JSON.stringify(data), // 🔹 body convertido a JSON
  });
};

// Obtener todos los reminders de un usuario
export const getRemindersByUserApi = async (usuario_id: string) => {
  return ApiFetch(`/api/reminders/user/${usuario_id}`, { method: "GET" });
};

// Obtener reminder por ID
export const getReminderByIdApi = async (reminder_id: string) => {
  return ApiFetch(`/api/reminders/${reminder_id}`, { method: "GET" });
};

// Eliminar reminder
export const deleteReminderApi = async (reminder_id: string) => {
  return ApiFetch(`/api/reminders/${reminder_id}`, { method: "DELETE" });
};
