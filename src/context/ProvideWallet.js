import React, { createContext, useContext } from 'react';
import { useProvideWallet } from './useProvideWallet';

const provideContext = createContext();

export function ProvideWallet({ children }) {
  const value = useProvideWallet();
  return (
    <provideContext.Provider value={value}>
      {children}
    </provideContext.Provider>
  );
}

export function useWallet() {
  return useContext(provideContext);
}
