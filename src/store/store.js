import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./slice/playerAccount"
export const store = configureStore({
    reducer: {
        checkPlayerAccount: playerReducer,
    }
})