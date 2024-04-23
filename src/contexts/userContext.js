import { createContext, useState } from "react";

export const UserContext = createContext();

export function UseUserContext({ children }) {
  const [userData, setUserData] = useState({
    nome: "Taldas Flores",
    email: "Talda@email.com",
    cnpj: "123456789884",
    endereco: { rua: "R. dos Bobos", numero: 123, cidade: "Recife" },
    pontos: 150,
    pedidos: [{ peso: 121 }, { peso: 63 }, { peso: 56 }],
  });

  function login(user) {
    setUserData(() => user);
  }

  function logout() {
    setUserData({});
  }

  return (
    <UserContext.Provider value={{ login, logout, userData }}>
      {children}
    </UserContext.Provider>
  );
}
