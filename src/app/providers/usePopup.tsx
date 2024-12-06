'use client';
import { useContext } from 'react';
import { PopupContext } from './PopupProvider';

export const usePopup = () => useContext(PopupContext);
