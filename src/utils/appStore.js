import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";


const appStore = configureStore({
    //store has have a reducer of its own, it will have reducers from each slice
    //There ios one big reducer in the app store that can have multiple reducers
    reducer: {
        cart: cartReducer,
        user: userReducer
    }
});

export default appStore;