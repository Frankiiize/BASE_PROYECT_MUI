import React, { createContext } from "react";

import { useLogin } from '../hooks/useLogin';

const authContext = createContext({});

const ProviderAuth = ({children}) => {
  const auth =  useLogin();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  )
}

export { ProviderAuth, authContext}