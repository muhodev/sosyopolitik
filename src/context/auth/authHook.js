import { useContext } from "react";
import AuthContext from "./AuthProvider/context";

export function useAuth() {
  const authContext = useContext(AuthContext);

  if (!authContext) throw new Error("Böyle bir context bulunamadı");

  return authContext;
}
