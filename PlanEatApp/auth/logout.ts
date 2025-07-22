import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
