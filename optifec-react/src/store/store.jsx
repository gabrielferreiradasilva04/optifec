import { configureStore } from "@reduxjs/toolkit";
import ClienteReducer from "./ClienteSlice"

export const store = configureStore({
    reducer:{
        clienteStore: ClienteReducer,
    }
})
