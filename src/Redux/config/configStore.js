import { configureStore } from "@reduxjs/toolkit";
import { getCrewSlice, getGymSlice } from "../modules/homeSlice";
import { crewSlice } from "../modules/crewSlice";
import { gymDetailSlice } from "../modules/gymDetilSlice";
import { MyPageSlice } from "../modules/mypageSlice";
import { alamSlice } from "../modules/notification";
import { NreadAlamSlice } from "../modules/notification";
import {
  loginSlice,
  kakaoLoginSlice,
  signupSlice,
  userSlice,
} from "../modules/userSlice";

const store = configureStore({
  reducer: {
    getCrew: getCrewSlice.reducer,
    getGym: getGymSlice.reducer,
    user: userSlice.reducer,
    crews: crewSlice.reducer,
    login: loginSlice.reducer,
    signup: signupSlice.reducer,
    kakaoLogin: kakaoLoginSlice.reducer,
    gymDetail: gymDetailSlice.reducer,
    myPage: MyPageSlice.reducer, 
    alams: alamSlice.reducer, 
    NreadAlams: NreadAlamSlice.reducer,
  },
});

export default store;
