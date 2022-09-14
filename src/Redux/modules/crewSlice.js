import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


export const __getCrew = createAsyncThunk(
    'getCrew',
    async (payload, thunkAPI) => {
        try {
        
            const data = await axios.get(`https://01192mg.shop/crews?lastCrewId=1000000&size=10`)
            return thunkAPI.fulfillWithValue(data.data)
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const crewSlice = createSlice({
    name: 'crews',
    initialState: {
        crews: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [__getCrew.pending]: (state) => {
            state.isLoading = true;
        },
        [__getCrew.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.crews = action.payload;
        },
        [__getCrew.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})