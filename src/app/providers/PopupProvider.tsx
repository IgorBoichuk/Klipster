'use client'
import { createContext, useState } from 'react'

export interface IPopupContext {
  isOpenPopup: boolean
  closePopup: () => void
  openPopup: () => void
}
interface PopupProps {
  children: React.ReactNode
}

export const PopupContext = createContext<IPopupContext | null>(null)
export const PopupProvider = ({ children }: PopupProps) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false)

  const closePopup = () => {
    setTimeout(() => {
      setIsOpenPopup(false)
    }, 100)
  }
  const openPopup = () => setIsOpenPopup(true)
  const togglePopup = () => setIsOpenPopup((prev) => !prev)

  const contextValue = { closePopup, isOpenPopup, openPopup, togglePopup }
  return (
    <PopupContext.Provider value={contextValue}>
      {children}
    </PopupContext.Provider>
  )
}
