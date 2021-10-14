import React, { createContext, useContext } from 'react'
import { useProvideModal } from './useProvideModal'

const modalContext = createContext()

export function ProvideModal({ children }) {
  const value = useProvideModal()
  return (
    <modalContext.Provider value={value}>
      {children}
    </modalContext.Provider>
  )
}

export function useModal() {
  return useContext(modalContext)
}
