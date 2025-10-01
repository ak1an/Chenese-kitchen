import { createSlice } from '@reduxjs/toolkit'

const persisted = JSON.parse(localStorage.getItem('favorites') || '[]')

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState: {
		ids: persisted, // [id]
	},
	reducers: {
		toggleFavorite: (state, action) => {
			const id = action.payload
			if (state.ids.includes(id)) {
				state.ids = state.ids.filter(x => x !== id)
			} else {
				state.ids.push(id)
			}
			localStorage.setItem('favorites', JSON.stringify(state.ids))
		},
		clearFavorites: (state) => {
			state.ids = []
			localStorage.setItem('favorites', JSON.stringify(state.ids))
		},
	},
})

export const { toggleFavorite, clearFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer






