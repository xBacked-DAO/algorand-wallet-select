import { useState } from 'react'

export function useProvideModal() {
  const [isOpenModal, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return {
    isOpenModal,
    closeModal,
    openModal,
  }
}
