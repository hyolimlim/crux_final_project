import { configureStore } from "@reduxjs/toolkit"
import pracSlice from "../modules/testSlice"

const store = configureStore (
    {
        reducer: {
            prac: pracSlice
        },
    }
);

export default store;