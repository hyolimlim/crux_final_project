import { configureStore } from "@reduxjs/toolkit";
import { crewSlice } from "../modules/crewSlice";
import { loginSlice, kakaoLoginSlice } from "../modules/userSlice";

const store = configureStore({
  reducer: {
    crews: crewSlice.reducer,
    login: loginSlice.reducer,
    kakaoLogin: kakaoLoginSlice.reducer,
  },
});

export default store;
