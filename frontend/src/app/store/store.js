import { headerReducer} from "@/Components/Header/HeaderSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        language: headerReducer, 
    }
})

export default store