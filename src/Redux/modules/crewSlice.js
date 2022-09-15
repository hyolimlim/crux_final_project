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
    try {
      const response = await axios
        .post(`http://3.35.22.118/crews`, payload, {
          headers: {
            Authorization: window.localStorage.getItem("access_token"),
          },
        })
        .then((response) => {
          console.log(response);
        });
      window.location.replace("/crews");
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.data);
    }
  }
);

//크루 삭제
export const deleteCrew = createAsyncThunk(
  "delete/createCrew",
  async (payload, thunkAPI) => {
    try {
      const response = await axios
        .delete(`http://3.35.22.118/crews/${payload}`, {
          headers: {
            Authorization: window.localStorage.getItem("access_token"),
          },
        })
        .then((response) => {
          console.log(response);
        });
      window.location.replace("/crews");
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.data);
    }
  }
);

//크루 상세정보
export const getCrewDetail = createAsyncThunk(
  "getCrewDetail",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`http://3.35.22.118/crews/${payload}`);
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

//크루 가입신청-->로그인이 필요합니다 뜸. 다시 확인해볼 것.
export const joinCrew = createAsyncThunk(
  "post/joinCrew",
  async (payload, thunkAPI) => {
    try {
      const data = await axios
        .post(`https://3.35.22.118/crews/${payload}`, {
          headers: {
            "Content-Type": "application/json",
            access_token: window.localStorage.getItem("access_token"),
          },
        })
        .then((response) => {
          console.log(response);
        });
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const crewSlice = createSlice({
  name: "crew",
  initialState: {
    crewDetail: [],
    isLoading: false,
    error: null,
  },
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
    [joinCrew.pending]: (state) => {
      state.isLoading = true;
    },
    [joinCrew.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.crewDetail = action.payload;
    },
    [joinCrew.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteCrew.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteCrew.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.crewDetail = action.payload;
    },
    [deleteCrew.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default { crewSlice }.reducer;
