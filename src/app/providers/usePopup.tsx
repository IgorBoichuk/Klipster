// 'use client'
// import { useContext } from 'react'
// import { IPopupContext, PopupContext } from './PopupProvider'

// export const usePopup = () => useContext(PopupContext)

'use client';
import { useContext } from 'react';
import { IPopupContext, PopupContext } from './PopupProvider';

export const usePopup = (): IPopupContext => {
	const context = useContext(PopupContext);

	if (!context) {
		throw new Error('usePopup must be used within a PopupProvider');
	}

	return context;
};
