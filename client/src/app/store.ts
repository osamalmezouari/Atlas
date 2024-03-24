import {configureStore} from "@reduxjs/toolkit";
import AdoptionReducer from "../features/adoption/adoptionSlice.ts";

const store = configureStore({
    reducer : {
        Adoptions : AdoptionReducer
    }
})
export type AppDispatch = typeof store.dispatch;
export default store