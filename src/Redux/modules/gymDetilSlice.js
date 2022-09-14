import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const __getGymDetail = createAsyncThunk(
    'getGymDetail',
    async (payload, thunkAPI) => {
        try {
            const data = await axios.get(`https://01192mg.shop/gyms/${payload}`)
            console.log(data.data)
            return thunkAPI.fulfillWithValue(data.data)
        } catch(err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const gymDetailSlice = createSlice({
    name: 'gymDetail',
    initialState: {
        gymDetail: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [__getGymDetail.pending]: (state) => {
            state.isLoading = true;
        },
        [__getGymDetail.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.gymDetail = action.payload;
        },
        [__getGymDetail.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})