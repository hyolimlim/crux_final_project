import { configureStore } from "@reduxjs/toolkit"
import { crewSlice } from "../modules/crewSlice";

const store = configureStore (
    {
        reducer: {
            crews: crewSlice.reducer,
        },
    }
);

export default store;