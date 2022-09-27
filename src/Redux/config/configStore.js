import { configureStore } from "@reduxjs/toolkit";
import { crewSlice } from "../modules/crewSlice";
import { gymSlice } from "../modules/gymSlice";
import { gymDetailSlice } from "../modules/gymDetilSlice";
import { MyPageSlice } from "../modules/mypageSlice";
import chat from "../modules/chatSlice";
import {
  loginSlice,
  kakaoLoginSlice,
  signupSlice,
  userSlice,
} from "../modules/userSlice";

const store = configureStore({
  reducer: {
    chat,
    user: userSlice.reducer,
    crews: crewSlice.reducer,
    login: loginSlice.reducer,
    signup: signupSlice.reducer,
    kakaoLogin: kakaoLoginSlice.reducer,
    gyms: gymSlice.reducer,
    gymDetail: gymDetailSlice.reducer,
    myPage: MyPageSlice.reducer,
  },
});

export default store;
