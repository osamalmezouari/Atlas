import {configureStore} from "@reduxjs/toolkit";
import AdoptionsReducer from "../features/adoption/adoptionSlice.ts";
import UsersReducer from "../features/adoption/userSlice.ts"
import RviewsReducer from "../features/adoption/reviewSlice.ts"

const store = configureStore({
    reducer : {
        Adoptions : AdoptionsReducer,
        Users : UsersReducer,
        Reviews : RviewsReducer
    }
})
export type AppDispatch = typeof store.dispatch;
export default store