import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = `${process.env.REACT_APP_URL}/users`
export const fetchUsers = createAsyncThunk('users/fetchUsers',async () => {
    try {
        const response = await axios.get(USERS_URL)
        return [...response.data]
    }catch (error) {
        return error.message
    }
})


const initialState = []

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
        .addCase(fetchUsers.fulfilled,(state, action) => {
            return action.payload
        })
    }
})

export const selectAllUsers = (state) => state.users

export const selectUserById = (state, userId) => state.users.find(user => user.id === userId)

export default userSlice.reducer