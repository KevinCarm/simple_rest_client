import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./apidataSlice";

export default configureStore({
    reducer: {
        api: apiReducer,
    },
});
