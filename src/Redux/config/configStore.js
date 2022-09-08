import { configureStore } from "@reduxjs/toolkit"
import { crewSlice } from "../modules/crewSlice";
import { gymSlice } from "../modules/gymSlice";

const store = configureStore (
    {
        reducer: {
            crews: crewSlice.reducer,
            gyms: gymSlice.reducer,
            
        },
    }
);

export default store;