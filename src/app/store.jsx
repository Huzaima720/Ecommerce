import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/ProductSlice"
import cartSlice from "../features/CartSlice"


export const store = configureStore({
    reducer: {
        productSlice,
        cartSlice
    },
    
})