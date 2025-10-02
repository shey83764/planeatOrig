import { ApiFetch } from "./api";

// Registro
export const registerUser = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) => {
  return ApiFetch("/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

// Login
export const loginUser = async (data: {
  email: string;
  password: string;
}) => {
  return ApiFetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

// Logout
export const logoutUser = async () => {
  return ApiFetch("/api/auth/logout", {
    method: "POST",
  });
};