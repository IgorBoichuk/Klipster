'use client';
import { useContext } from 'react';
import { PopupContext } from '../providers/PopupProvider';

export const usePopup = () => useContext(PopupContext);
