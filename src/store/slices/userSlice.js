import { createSlice } from '@reduxjs/toolkit'

const saved = JSON.parse(localStorage.getItem('user') || 'null')

const userSlice = createSlice({
	name: 'user',
    initialState: {
        profile: saved, // {name, email}
    },
	reducers: {
        login: (state, action) => {
            state.profile = action.payload
            localStorage.setItem('user', JSON.stringify(state.profile))
        },
		logout: (state) => {
			state.profile = null
			localStorage.removeItem('user')
		},
	},
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer






