import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const BASE_URL = 'http://sparta-tim.shop'

export const __getMyPage = createAsyncThunk(
    'getMyPage',
    async (memberId, thunkAPI) => {
        try {
            console.log(memberId)
            const data = await axios.get(`${BASE_URL}/members/${memberId}`,
                {headers: {Authorization: window.localStorage.getItem("access_token"),},})
                
                return thunkAPI.fulfillWithValue(data.data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const __putMyPage = createAsyncThunk(
    'putMyPage',
    async (payload, thunkAPI) => {
        try {
            console.log(payload)
            const data = await axios.put(`${BASE_URL}/members`, payload ,
                {headers: {Authorization: window.localStorage.getItem("access_token"),},})
                console.log(data.data)
                return thunkAPI.fulfillWithValue(data.data)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const MyPageSlice = createSlice({
    name: 'MyPage',
    initialState:{
        mypage: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [__getMyPage.pending]: (state) => {
            state.isLoading = true;
        },
        [__getMyPage.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.mypage = action.payload;
        },
        [__getMyPage.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})