
import { createContext, useState } from "react";

// Creamos el contexto
export const UserContext = createContext();

// Creamos el Provider
export const UserProvider = ({ children }) => {
  // Token simulado: por defecto, true
  const [token, setToken] = useState(true);

  // Método para cerrar sesión
  const logout = () => {
    setToken(false);
  };

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
};
