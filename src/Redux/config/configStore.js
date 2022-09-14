import { configureStore } from "@reduxjs/toolkit";
import { crewSlice } from "../modules/crewSlice";
import { gymSlice } from "../modules/gymSlice";
import { gymDetailSlice } from "../modules/gymDetilSlice";
import { loginSlice, kakaoLoginSlice } from "../modules/userSlice";



const store = configureStore({
  reducer: {
    crews: crewSlice.reducer,
    login: loginSlice.reducer,
    kakaoLogin: kakaoLoginSlice.reducer,
    gyms: gymSlice.reducer,
    gymDetail: gymDetailSlice.reducer,
  },
});


export default store;
