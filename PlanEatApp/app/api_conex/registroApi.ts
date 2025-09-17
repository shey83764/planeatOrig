import { apiFetch } from "./api";

// Tipado del registro
export const registerUser = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) => {
  return apiFetch("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
};
