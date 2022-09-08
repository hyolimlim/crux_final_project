import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const __getGyms= createAsyncThunk(
    'getGyms',
    async (payload, thunkAPI) => {
        try {
            const data = await axios.get('http://localhost:3001/gyms')
            return thunkAPI.fulfillWithValue(data.data)
        } catch(err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const gymSlice = createSlice({
    name: 'gyms',
    initialState: {
        gyms: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [__getGyms.pending]: (state) => {
            state.isLoading = true;
        },
        [__getGyms.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.gyms = action.payload;
        },
        [__getGyms.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})