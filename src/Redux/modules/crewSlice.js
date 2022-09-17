import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const SERVERH = process.env.REACT_APP_SERVER_H;
const SERVERM = process.env.REACT_APP_SERVER_M;

const BASE_URLM = "https://01192mg.shop/crews";

const initialState = {
  crews: [],
  isLoading: false,
  isSuccess: false,
  error: null,
};

//크루 CRUD
/////////////////////////////////////////////////////////////////////

//크루 생성->확인
export const createCrew = createAsyncThunk(
  "post/createCrew",
  async (payload, thunkAPI) => {
    try {
      const response = await axios
        .post(`https://01192mg.shop/crews`, payload, {
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

//크루 수정->확인
export const editCrew = createAsyncThunk(
  "put/editCrew",
  async (payload, thunkAPI) => {
    try {
      const response = await axios
        .put(
          `https://01192mg.shop/crews/${payload.id}`,
          {
            name: payload.name,
            content: payload.content,
            imgUrl: payload.imgUrl,
          },
          {
            headers: {
              Authorization: window.localStorage.getItem("access_token"),
            },
          }
        )
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

//크루 삭제->확인
export const deleteCrew = createAsyncThunk(
  "delete/createCrew",
  async (payload, thunkAPI) => {
    try {
      const response = await axios
        .delete(`https://01192mg.shop/crews/${payload}`, {
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

//크루 상세정보->확인
export const getCrewDetail = createAsyncThunk(
  "getCrewDetail",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(`https://01192mg.shop/crews/${payload}`);
      console.log(response.data);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//크루 가입신청 & 목록 조회 & 가입 승인 & 추방
/////////////////////////////////////////////////////////////////////

//크루 가입신청-->확인
export const joinCrew = createAsyncThunk(
  "post/joinCrew",
  async (payload, thunkAPI) => {
    try {
      const response = await axios
        .post(`https://01192mg.shop/crew-members/${payload}`, null, {
          headers: {
            Authorization: window.localStorage.getItem("access_token"),
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

//크루 가입 신청 목록 확인
export const getCrewApplicationList = createAsyncThunk(
  "getCrewApplicationList",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`https://01192mg.shop/crews/${payload}`, {
        headers: {
          Authorization: window.localStorage.getItem("access_token"),
        },
      });
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

//크루 공지사항 CRUD
/////////////////////////////////////////////////////////////////////

//여기서부터는 엑스트라리듀서 등록안함

//크루 공지사항 수정
export const editCrewNotice = createAsyncThunk(
  "put/editCrew",
  async (payload, thunkAPI) => {
    try {
      const response = await axios
        .put(
          `http://3.35.22.118/crews/${payload.id}`,
          {
            name: payload.name,
            content: payload.content,
            imgUrl: payload.imgUrl,
          },
          {
            headers: {
              Authorization: window.localStorage.getItem("access_token"),
            },
          }
        )
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

//크루 공지사항 삭제
export const deleteCrewNotice = createAsyncThunk(
  "delete/CrewNotice",
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

//크루 사진 CRUD
/////////////////////////////////////////////////////////////////////

//크루 사진 등록--> 됨
export const addCrewPhoto = createAsyncThunk(
  "add/CrewPhoto",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const response = await axios
        .post(
          `https://01192mg.shop/crew-posts/${payload.id}`,
          {
            imgList: payload.imgUrl,
          },
          {
            headers: {
              Authorization: window.localStorage.getItem("access_token"),
            },
          }
        )
        .then((response) => {
          console.log(response);
        });
      // window.location.replace("/crews");
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.data);
    }
  }
);

//크루 사진 조회 --> 헤더 안넣으면 401에러/1.무한스크롤X
export const getCrewPhoto = createAsyncThunk(
  "get/CrewPhoto",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://01192mg.shop/crews-posts/${payload}?lastPostId=12&size=10`,
        {
          headers: {
            Authorization: window.localStorage.getItem("access_token"),
          },
        }
      );
      console.log(response.data);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const crewSlice = createSlice({
  name: "crew",
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
    [editCrew.pending]: (state) => {
      state.isLoading = true;
    },
    [editCrew.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.crewDetail = action.payload;
    },
    [editCrew.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default { crewSlice }.reducer;
