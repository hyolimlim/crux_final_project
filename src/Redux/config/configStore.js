import { configureStore } from "@reduxjs/toolkit"
import { crewSlice } from "../modules/crewSlice";
import { gymSlice } from "../modules/gymSlice";
import { gymDetailSlice } from "../modules/gymDetilSlice";

const store = configureStore (
    {
        reducer: {
            crews: crewSlice.reducer,
            gyms: gymSlice.reducer,
            gymDetail: gymDetailSlice.reducer,
            
        },
    }
);

export default store;