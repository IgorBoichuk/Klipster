'use client'
import { useContext } from 'react'
import { IPopupContext, PopupContext } from './PopupProvider'

export const usePopup = () => useContext(PopupContext)
