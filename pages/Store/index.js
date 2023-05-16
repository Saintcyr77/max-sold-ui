import { configureStore } from "@reduxjs/toolkit";
// import registrationReducer from "./Slices/UserSlice"
import registrationSlice from "./Slices/UserSlice";

const store = configureStore({
    reducer:{
    registration: registrationSlice.reducer,

    }
})

export default store