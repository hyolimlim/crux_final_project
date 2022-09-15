import { configureStore } from "@reduxjs/toolkit";
import { crewDetailSlice, createCrewSlice } from "../modules/crewSlice";
import { gymSlice } from "../modules/gymSlice";
import { gymDetailSlice } from "../modules/gymDetilSlice";
import { loginSlice, kakaoLoginSlice, signupSlice } from "../modules/userSlice";

const store = configureStore({
  reducer: {
    crews: crewDetailSlice.reducer,
    createCrew: createCrewSlice.reducer,
    login: loginSlice.reducer,
    signup: signupSlice.reducer,
    kakaoLogin: kakaoLoginSlice.reducer,
    gyms: gymSlice.reducer,
    gymDetail: gymDetailSlice.reducer,
  },
});

export default store;
