import { createSlice } from '@reduxjs/toolkit'

const persisted = JSON.parse(localStorage.getItem('cart') || '[]')

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: persisted, // [{id, qty}]
	},
	reducers: {
		addToCart: (state, action) => {
			const id = action.payload
			const existing = state.items.find(i => i.id === id)
			if (existing) existing.qty += 1
			else state.items.push({ id, qty: 1 })
			localStorage.setItem('cart', JSON.stringify(state.items))
		},
		removeFromCart: (state, action) => {
			const id = action.payload
			state.items = state.items.filter(i => i.id !== id)
			localStorage.setItem('cart', JSON.stringify(state.items))
		},
		decrementQty: (state, action) => {
			const id = action.payload
			const item = state.items.find(i => i.id === id)
			if (!item) return
			item.qty -= 1
			if (item.qty <= 0) {
				state.items = state.items.filter(i => i.id !== id)
			}
			localStorage.setItem('cart', JSON.stringify(state.items))
		},
		clearCart: (state) => {
			state.items = []
			localStorage.setItem('cart', JSON.stringify(state.items))
		},
	},
})

export const { addToCart, removeFromCart, decrementQty, clearCart } = cartSlice.actions
export default cartSlice.reducer



