import { configureStore } from "@reduxjs/toolkit";
import ingredientSlice from "./ingredient-slice";
const store = configureStore( {
    reducer: {
        ingredients : ingredientSlice.reducer
    }
} )
export default store