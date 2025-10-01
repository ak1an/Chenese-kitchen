import { createSlice } from '@reduxjs/toolkit'

const filtersSlice = createSlice({
	name: 'filters',
	initialState: {
		alphabet: '', // selected starting letter
		category: 'all', // spicy|sweet|unusual|all
		type: 'all', // food|sauces|drinks|icecream|all
		query: '',
	},
	reducers: {
		setAlphabet: (state, action) => { state.alphabet = action.payload },
		setCategory: (state, action) => { state.category = action.payload },
		setType: (state, action) => { state.type = action.payload },
		setQuery: (state, action) => { state.query = action.payload },
		resetFilters: (state) => { state.alphabet = ''; state.category = 'all'; state.type = 'all'; state.query = '' },
	},
})

export const { setAlphabet, setCategory, setType, setQuery, resetFilters } = filtersSlice.actions
export default filtersSlice.reducer






