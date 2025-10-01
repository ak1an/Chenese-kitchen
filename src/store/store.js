import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './slices/productsSlice.js'
import cartReducer from './slices/cartSlice.js'
import favoritesReducer from './slices/favoritesSlice.js'
import filtersReducer from './slices/filtersSlice.js'
import uiReducer from './slices/uiSlice.js'
import reviewsReducer from './slices/reviewsSlice.js'
import userReducer from './slices/userSlice.js'

export const store = configureStore({
	reducer: {
		products: productsReducer,
		cart: cartReducer,
		favorites: favoritesReducer,
		filters: filtersReducer,
			ui: uiReducer,
			reviews: reviewsReducer,
			user: userReducer,
	},
})


