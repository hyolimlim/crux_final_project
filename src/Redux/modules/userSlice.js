import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const SERVERH = process.env.REACT_APP_SERVER_H;
// const SERVERM = process.env.REACT_APP_SERVER_M;

// const BASE_URL = SERVERM;

const initialState = {
  user: [],
  isLoading: false,
  isSuccess: false,
  error: null,
};

//회원가입
export const signup = createAsyncThunk(
  "/members/signup",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(
        `http://3.35.22.118/members/signup`,
        payload
      );
      window.alert("회원가입 성공");
      window.location.replace("/");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.data);
    }
  }
);

export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: {
    [signup.pending]: (state, action) => {
      state.isLoading = true;
    },
    [signup.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
    },
    [signup.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

//로그인
export const login = createAsyncThunk(
  "members/login",
  async (payload, thunkAPI) => {
    try {
      const response = await axios
        .post(`https://01192mg.shop/members/login`, payload)
        .then((response) => {
          console.log(response);
          window.localStorage.setItem(
            "access_token",
            response.headers.access_token
          );
          console.log(response);
        });
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.data);
    }
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

//카카오톡 로그인
export const kakaoLogin = createAsyncThunk(
  "members/kakaoLogin",
  async (payload, thunkAPI) => {
    try {
      const response = await axios
        .get(`https://01192mg.shop/oauth/kakao/callback?code=${payload}`)
        .then((response) => {
          console.log(response);
          window.localStorage.setItem(
            "access_token",
            response.headers.access_token
          );
        });
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.data);
    }
  }
);

export const kakaoLoginSlice = createSlice({
  name: "kakaoLogin",
  initialState,
  reducers: {},
  extraReducers: {
    [kakaoLogin.pending]: (state) => {
      state.isLoading = true;
    },
    [kakaoLogin.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    },
    [kakaoLogin.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

//크루 좋아요
export const likeCrew = createAsyncThunk(
  "post/like-crew",
  async (payload, thunkAPI) => {
    try {
      const response = await axios
        .delete(`https://01192mg.shop/like-crews/${payload}`, null, {
          headers: {
            Authorization: window.localStorage.getItem("access_token"),
          },
        })
        .then((response) => {
          console.log(response);
        });
      window.alert("좋아요 완료");
      console.log(response.data);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.data);
    }
  }
);

//크루 좋아요취소
export const unLikeCrew = createAsyncThunk(
  "post/like-crew",
  async (payload, thunkAPI) => {
    try {
      const response = await axios
        .post(`https://01192mg.shop/like-crews/${payload}`, null, {
          headers: {
            Authorization: window.localStorage.getItem("access_token"),
          },
        })
        .then((response) => {
          console.log(response);
        });
      window.alert("좋아요 취소 완료");
      console.log(response.data);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.data);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [likeCrew.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [likeCrew.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [likeCrew.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default { userSlice, signupSlice, loginSlice, kakaoLoginSlice }.reducer;
