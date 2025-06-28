import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuthenticated: false,
    loadingState: false,
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {

        }
    }
})

export const {setuser} = authSlice.actions;
export default authSlice.reducer;