import { createSlice } from '@reduxjs/toolkit'
import seed from '../../tempData/seed.js'

const initialState = {
    // Use images already provided by seed (each item has its own image via safeImage)
    items: seed,
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
})

export default productsSlice.reducer


