import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const BASE_URL = "http://sparta-tim.shop"

export const __getGyms= createAsyncThunk(
    'getGyms',
    async (payload, thunkAPI) => {
        console.log(payload)
        try {
            const lon = payload.lng
            const lat = payload.lat
            const data = await axios.get(`${BASE_URL}/gyms?page=0&size=10&lon=${lon}&lat=${lat}`)
            return thunkAPI.fulfillWithValue(data.data)
        } catch(err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const gymSlice = createSlice({
    name: 'gyms',
    initialState: {
        gyms0: [],
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
            state.gyms0 = action.payload;
        },
        [__getGyms.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})