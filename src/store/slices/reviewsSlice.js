import { createSlice, nanoid } from '@reduxjs/toolkit'

const persisted = JSON.parse(localStorage.getItem('reviews') || '[]')

const reviewsSlice = createSlice({
	name: 'reviews',
	initialState: {
		items: persisted, // {id, name, rating, text, createdAt}
	},
	reducers: {
		addReview: {
			prepare: (name, rating, text) => ({ payload: { id: nanoid(), name, rating, text, createdAt: Date.now() } }),
			reducer: (state, action) => {
				state.items.unshift(action.payload)
				localStorage.setItem('reviews', JSON.stringify(state.items))
			},
		},
		clearReviews: (state) => {
			state.items = []
			localStorage.setItem('reviews', JSON.stringify(state.items))
		},
	},
})

export const { addReview, clearReviews } = reviewsSlice.actions
export default reviewsSlice.reducer






