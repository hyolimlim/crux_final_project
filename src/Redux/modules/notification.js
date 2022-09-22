import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const BASE_URL = 'http://sparta-tim.shop'

export const __getAlam = createAsyncThunk(
    'getAlam',
    async (payload, thunkAPI) => {
        try {
            const data = await axios.get(`${BASE_URL}/notifications`,
            { headers: {Authorization: window.localStorage.getItem("access_token")}})
            return thunkAPI.fulfillWithValue(data.data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const __readAlam = createAsyncThunk(
    'readAlam',
    async (notificationId, thunkAPI) => {
        try {
            console.log(notificationId)
            const data = await axios.post(`${BASE_URL}/notifications/${notificationId}`, null,
            { headers: {Authorization: window.localStorage.getItem("access_token")}})
            console.log(data)
            return thunkAPI.fulfillWithValue(data.data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const __deleteAlam = createAsyncThunk(
    'deleteAlam',
    async (notificationId, thunkAPI) => {
        try {
            console.log(notificationId)
            const data = await axios.delete(`${BASE_URL}/notifications/${notificationId}`,
            { headers: {Authorization: window.localStorage.getItem("access_token")}})
            return thunkAPI.fulfillWithValue(data.data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const __deleteAlams = createAsyncThunk(
    'deleteAlams',
    async (payload, thunkAPI) => {
        try {
            const data = await axios.delete(`${BASE_URL}/notifications`,
            { headers: {Authorization: window.localStorage.getItem("access_token")}})
            return thunkAPI.fulfillWithValue(data.data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const __NreadAlam = createAsyncThunk(
    'getAlam',
    async (payload, thunkAPI) => {
        try {
            const data = await axios.get(`${BASE_URL}/notifications/count`,
            { headers: {Authorization: window.localStorage.getItem("access_token")}})
            // console.log(data)
            return thunkAPI.fulfillWithValue(data.data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)


export const alamSlice = createSlice({
    name: 'getAlam',
    initialState:{
        alams: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [__getAlam.pending]: (state) => {
            state.isLoading = true;
        },
        [__getAlam.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.alams = action.payload;
        },
        [__getAlam.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const NreadAlamSlice = createSlice({
    name: 'NreadAlam',
    initialState:{
        NreadAlams: [],
        isLoading2: false,
        error2: null,
    },
    reducers: {},
    extraReducers: {
        [__NreadAlam.pending]: (state) => {
            state.isLoading2 = true;
        },
        [__NreadAlam.fulfilled]: (state, action) => {
            state.isLoading2 = false;
            state.NreadAlams = action.payload;
        },
        [__NreadAlam.rejected]: (state, action) => {
            state.isLoading2 = false;
            state.error2 = action.payload;
        }
    }
})