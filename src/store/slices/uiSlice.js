import { createSlice } from '@reduxjs/toolkit'

const persistedLang = localStorage.getItem('lang') || 'ru'
const persistedTheme = localStorage.getItem('theme') || 'dark'

const uiSlice = createSlice({
	name: 'ui',
	initialState: {
		language: persistedLang, // 'ru' | 'en'
		theme: persistedTheme, // 'dark' | 'light'
		isCartOpen: false,
		toasts: [], // {id, message}
	},
	reducers: {
		setLanguage: (state, action) => {
			state.language = action.payload
			localStorage.setItem('lang', state.language)
		},
		setTheme: (state, action) => {
			state.theme = action.payload
			localStorage.setItem('theme', state.theme)
		},
		toggleTheme: (state) => {
			state.theme = state.theme === 'dark' ? 'light' : 'dark'
			localStorage.setItem('theme', state.theme)
		},
		openCart: (state) => { state.isCartOpen = true },
		closeCart: (state) => { state.isCartOpen = false },
		addToast: (state, action) => {
			const id = Math.random().toString(36).slice(2)
			state.toasts.push({ id, message: action.payload })
		},
		removeToast: (state, action) => {
			state.toasts = state.toasts.filter(t => t.id !== action.payload)
		},
	},
})

export const { setLanguage, setTheme, toggleTheme, openCart, closeCart, addToast, removeToast } = uiSlice.actions
export default uiSlice.reducer


