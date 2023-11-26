import React, { createContext, useContext, useState } from 'react';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [usuario, setUsuario] = useState("invitado");

  const actualizarUsuario = (nuevoUsuario) => {
    setUsuario(nuevoUsuario);
  };

  return (
    <LoginContext.Provider value={{ usuario, actualizarUsuario }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  return useContext(LoginContext);
};
