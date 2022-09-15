import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const SERVERH = process.env.REACT_APP_SERVER_H;
const SERVERM = process.env.REACT_APP_SERVER_M;

const BASE_URL = SERVERM;

const initialState = {
  crews: [],
  isLoading: false,
  isSuccess: false,
  error: null,
};

//크루 생성
export const createCrew = createAsyncThunk(
  "post/createCrew",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const response = await axios
        .post(`${BASE_URL}/crews`, payload, {
          headers: {
            access_token: window.localStorage.getItem("access_token"),
          },
        })
        .then((response) => {
          console.log(response);
        });
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.data);
    }
  }
);

export const createCrewSlice = createSlice({
  name: "createCrew",
  initialState,
  reducers: {},
  extraReducers: {
    [createCrew.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [createCrew.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.crew = action.payload;
    },
    [createCrew.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const getCrewDetail = createAsyncThunk(
  "getCrewDetail",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`https://01192mg.shop/crews/${payload}`);
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const crewDetailSlice = createSlice({
  name: "crewDetail",
  initialState: {
    crewDetail: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getCrewDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [getCrewDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.crewDetail = action.payload;
    },
    [getCrewDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default { crewDetailSlice, createCrewSlice }.reducer;
